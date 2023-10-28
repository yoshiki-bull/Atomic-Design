# `context`(グローバルなstate)を使う

## 必要性  
 全てのコンポーネントやページで参照できる値であり、更新もまたどのページでも可能  
 => 管理者判定などを効率的に行える  

## **Providers**  
値を提供するために囲っていくものを「プロバイダー」と呼ぶことがある  
=> `providers`フォルダ内で`context`を作成する

## `createContext()`でコンテキスト生成
```
import React, { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "アル";

  return (
    <UserContext.Provider value={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
```

- `value`(Providerのprops)
グローバルに参照できる値は`value`という`props`に渡す  
=> グローバルなstateを提供

- `context`の値を参照するためのHooks
=> `useContext(コンテキストコンポーネント)`  
=> 引数に参照したいコンテキストを渡す
