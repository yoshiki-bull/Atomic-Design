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

