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
