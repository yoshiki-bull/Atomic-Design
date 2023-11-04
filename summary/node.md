# Node.jsの環境構築[NVM]

 **nvm(Node Version Manager)** を使用することで、Node.jsのバージョンを簡単に切り替えることができ、異なるNode.jsバージョンをプロジェクトごとに管理するなどといったことが可能。

## NVMでNode.jsをインストール
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

- **curl -o-**  
指定したURLからデータをダウンロードする。  
(-o- => ダウンロードしたデータを標準出力する)

- **https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh**  
nvmのインストールスクリプトがホストされているGitHubリポジトリのURL。

- **| 演算子**  
curlコマンドからのデータを次のコマンドに渡す

- **bash**  
パイプを介して受け取ったデータをBashシェルで実行する。  
これにより、nvmのインストールスクリプトが実行される。

### nvmのインストール検証
- `nvm --version`
- `command -v nvm`

### Node.jsのインストール
#### ① LTS(Long Term Support)バージョンを使う ←推奨
```
nvm install --lts --latest-npm
nvm alias default 'lts/*'
```

- **LTS**  
長期間に渡って安全なメンテナンスリリースのみが実施されるバージョン。

- **--lts --latest-npm**  
LTSバージョンの最新版をインストールすると同時に最新のnpmもインストールする。

- **alias default 'lts/*'**  
利用可能なLTSバージョンのうち最新のものをデフォルトに設定する。  
これにより、新しいターミナルセッションを開いた時にデフォオルトのNode.jsバージョンが  
最新のLTSバージョンに設定される。

#### ② stable(安定版)バージョンを使う
```
nvm install stable --latest-npm
nvm alias default stable
```

- **stable --latest-npm**  
最新の安定版のNode.jsをインストールすると同時に最新のnpmもインストールする。

### nvmコマンド

1. 利用可能なNode.jsバージョンの一覧を表示
```
nvm ls-remote
```

2. Node.jsのバージョンを指定してインストール  
```
nvm install <version>
```

3. 使用したいNode.jsバージョンの切り替え  
```
nvm use <version>
```

4. デフォルトのNode.jsバージョンを設定  
```
nvm alias default <version>
```

- [参考](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a)
