# React まとめ

## 環境構築

- `Node.js`をインストール  
  => React の開発を進める上では「npm」(Node Pckage Manager)が必要  
  => `node`コマンドで`REPL`に入れる
  - 参考サイト  
    ・[Node.js DL ページ](https://nodejs.org/en/download)  
    ・[VSCode × React 環境構築](https://high-career.jp/2022/01/04/vscode-react-dev/)
- `Create react App`して React プロジェクトのひな形作成  
  ・コマンド  
  `npx create-react-app [アプリケーション名(プロジェクト)]`  
  => フロントエンドのビルドパイプラインを構築する  
  => 開発に必要なパッケージや`create-react-app`コマンドがインストールされる  
  => デフォルトページ`http://localhost:3000`が表示される
- トラブルシューティング
  - `npm`の設定に関する問題  
    ・コマンド  
    `npm install -g npm@latest`  
    => npm を最新バージョンにアップデートする

## 参考

- [React 公式ドキュメント](https://ja.react.dev/)

## Atomic Designでコンポーネントを分割する
- **Atomic Design**  
画面の要素を5段階に分けて構成する手法・概念  

1. **Atoms(原子)**  
最も小さくそれ以上分解できない要素  
【例】=> ボタン、アイコンなど

2. **Molucules(分子)**  
`Atom`の組み合わせで構成されるデザインパーツ  
【例】=> アイコン+メニュー、アイコンセット、プロフ画像+テキストボックスなど

3. **Organisms(有機体)**  
`Atom`や`Molucule`の組み合わせで構成される。  
これ単体である程度の意味をもつ要素の集まり。  
【例】=> ツイート入力エリア、サイドメニューなど  

4. **Templates(テンプレート)**  
ページのレイアウトのみを表現する要素（実際のデータは持たない）  
【例】=> サイドメニュー、ツイートエリア、トピックエリアなどのレイアウト情報など  

5. **Pages(ページ)**  
最終的に表示される1画面  
【例】=> ページ遷移ごとに表示される各画面

## `context`(グローバルなstate)を使う
- 必要性  
 全てのコンポーネントやページで参照できる値であり、更新もまたどのページでも可能  
 => 管理者判定などを効率的に行える  

- **Providers**  
値を提供するために囲っていくものを「プロバイダー」と呼ぶことがある  
=> `providers`フォルダ内で`context`を作成する

- `createContext()`でコンテキスト生成
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
