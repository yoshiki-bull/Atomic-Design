# JSON Placaholderの使い方

## JSON Placeholder
フリーREST APIを提供しているサービス  
JSON形式でデータを返してくれる

## 用意するもの
- `axios`  
=> Web APIを簡単にコールできるライブラリ  

- 参照
  - [JSONPlaceholder](https://jsonplaceholder.typicode.com/)
  - [AXIOSドキュメント](https://axios-http.com/ja/docs/api_intro)
  - [axiosを学ぶ](https://reffect.co.jp/vue/vue-axios-learn/)

## 使い方
```
App.js

import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/userswswf")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users?id=1")
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=1のuser</button>
    </div>
  );
}
```

- `axios.[get/delete/post/put/patch...etc]("URL")`  
コールしたいAPIのHTTPメソッドを指定

- `axios.get().then(function (response) => 処理)`  
=> axiosによる通信が成功した際の処理を記述  
=> リクエスト後に戻される値は全て`response`に格納される  

- `axios.get().then().catch(function (error) => 処理 )`  
axiosの処理内でエラーが発生した際の処理を記述

- `axios.then().catch().finally(function() => 処理)`  
axiosの処理結果に関係なく必ず実行される処理
