# `context`(グローバルなstate)を使う

## 必要性  
 全てのコンポーネントやページで参照できる値であり、更新もまたどのページでも可能  
 => 管理者判定などを効率的に行える  

## **Providers**  
値を提供するために囲っていくものを「プロバイダー」と呼ぶことがある  
=> `providers`フォルダ内で`context`を作成する

## `createContext()`でコンテキスト生成
```
import React, { createContext, useState } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;

  const [userInfo, setUserInfo] = useState(null);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
```

- `value`(Context.Providerのprops)  
グローバルに参照させたい値は`value`という`props`に渡す  
=> グローバルなstateを提供

- 他のコンポーネントでコンテキストの値を参照するためのHooks  
=> `useContext(参照したいコンテキスト)`  
=> 引数に参照したいコンテキストを渡す

## コンテキストを参照する

### 使うもの
- `createContext()`  
=> グローバルなstateを扱うためのコンテキストを生成  

- `useState()`  
=> 動的に値が変わる実際に扱う`state`と関数を宣言  

- `useContext()`  
=> コンテキストを参照するためのReact Hooks  

- `<Context.Provider value={state, set関数} >`  
=> グローバルに参照させたいstateを設定  

## Contextとレンダリングの最適化
Reactのコンポーネントは親が再レンダリングされれば、連動して全ての子も再レンダリングされる

- Contextと再レンダリング  
Contextを使う場合は、値が更新される際にどのコンポーネントが再レンダリングされるのか意識する必要がある。  

- `memo()`を使う  
=> Reactの「`memo()`」を使えば、監視するpropsに変更がない限り再レンダリングしない設定となる  
=> Contextが変更された際の不必要な再レンダリングを防止する

- 使用箇所
  - `SearchInput`
  - `UserCard`
  - `UserIconWithName`

## Recoil でグローバルなstateを管理する
- **Recoil**  
=> Reactを開発しているFacebookが開発  
=> グローバルなstateを非常に簡単にかんりできるライブラリ  

- Recoil インストール
  - `npm install recoil`
  - `yarn add recoil`

- グローバルなstateの定義
```
./store/userState.js

import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {isAdmin: false}
})
```

- `import {atom} from "recoil";`  
=> atom() を使う  

- `key: {キー}`  
=> システム全体でこの`state`を参照できるキーとなる一意のキーを指定  
=> ファイル名に合わせるのが一般的  

- `default: {デフォルトの値}`  
=> グローバルなstateの初期値を設定する 

## Recoilの機能

- `RecoilRoot`コンポーネント  
=> Recoilのstateを使うためには、全体のコンポーネントを`RecoilRoot`で囲う必要がある  
=> 「App.js」で使用

- `useRecoilState()`  
=> `const [ userInfo, setUserInfo ] = useRecoilState(userState);`  
=> Recoilのstateを参照するための機能  
=> `useState()`のようにstateと更新関数を扱うことができる  
=> 「Users/jsx」で使用

- `useRecoilValue()`  
=> `const userInfo = useRecoilValue(userState)`  
=> stateの値のみを参照する場合に使用する（更新関数なし）  
=> 「UserIconWithName.jsx」で使用

- `useSetRecoilState()`  
=> `const setUserInfo = useSetRecoilState(userState);`  
=> set関数のみが必要な場合に使用する（値の参照はなし）  
=> 値の更新だけ行う  
=> 「Top.jsx」で使用

## Recoilと再レンダリング

- `useRecoilState()`  
通常通り、stateの値が更新されたらコンポーネントを再レンダリングする

- `useSetRecoilState()`  
更新関数しか使わないため、stateの値が変更されたとしても再レンダリングしないようにRecoil側で処理される
