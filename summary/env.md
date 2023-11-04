# React & TypeScriptのプロジェクト作成

## あらかじめ必要なもの
- **Node.js**のインストール
- **Git**のインストール

## 参考
- [React & TypeScriptのプロジェクト作成](https://typescript-jp.gitbook.io/deep-dive/browser#purojekutono)

## ① Create React App を利用する[←推奨]
TypeScriptを使用してReactのWebアプリケーションを作成する場合、  
最も一般的な方法は、Create React Appを使うこと。  
このツールはReactの開発チームがメンテナンスを行っている。

### 簡単にプロジェクトをセットアップする
```
npx create-react-app my-app --template typescript
```
- **my-app**の部分にはプロジェクトに利用するフォルダ名を指定する。

1. `cd my-app // プロジェクトに移動` 
2. `npm start` または `yarn start` (開発用サーバ起動)
3. http://localhost:3000/ にアクセスして動作を確認しながら開発を進めることができる

### Live Reload / Hot Reload
TypeScriptの開発用サーバは、ファイルの更新を監視しているので、  
TypeScriptのコードを変更すれば自動的にコンパイルされ、  
ブラウザがリロードされる。

### プロジェクトのビルド
- `npm run build` / `yarn build`  
いずれかのコマンドで、本番開環境用のビルドを実行できる。  
これで、Reactチームによって本番環境に最適化されたバンドルファイルを首都力できる。

### プロジェクトの詳細設定内容
Create React Appでプロジェクトを作成すると、下記のようなtsconfig.jsonが作成される。これを必要に応じて修正し、TypeScriptのコンパイラの動作を、好みに合わせて調整することができます。

```
{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "esnext"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react"
  },
  "include": [
    "src"
  ]
}
```

## ② 手動セットアップ

### 素早くセットアップする[git clone]
ベースとして https://github.com/basarat/react-typescript を使用する。

```
git clone https://github.com/basarat/react-typescript.git
cd react-typescript
npm install
```

### プロジェクトの詳細設定
実際のプロジェクト作成手順 -> [手順](https://typescript-jp.gitbook.io/deep-dive/browser#purojekutono)

### 開発
1. `nom start`実行
2. `http://localhost:8080` を参照
- `src/app/app.tsx`・  
src/app/ap.tsxに使われる`ts/tsx`ファイル・  
`src/templates/index.html`  
を編集するとサーバがリロードされる
3. **npm run build**を実行して本番用のアセットをビルドする
- Webサーバを通じて**public**フォルダ(ビルドされたアセットが配置される)をサーブする

