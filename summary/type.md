# TypeScript [型]

- Microsoftが開発
- JSに「型」を導入
- より安全にバグが少なく開発で切る
- 開発者間で認識を合わせやすい
- エディタ上でコード補完が効くようになり開発効率が向上する
- コンポーネント指向のReactと非常に相性が良い

## TypeScriptの型
```
// 論理値
let bool: boolean = true;

// 数値
let num: number = 0;

// 文字列
let str: string = "A";

// 配列
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple 使い道不明
let tuple: [number, string] = [0, "A"];

// なんでも
let any1: any = false;

// void -> 関数に紐づく（戻り値なし）
// 「void」は省略可能(TypeScriptが推測して処理してくれる)
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: { id: number; name: string } = { id: 0, name: "AAA" };
```

## tsconfig.jsonファイル 
TypeScriptの設定ファイル

- **`"strict": true`について**  
「型」に関する厳しめのルールをまとめた設定  
  - 新規開発の場合  
  はじめから「true」にしておくのが安全
  - 既存のプロジェクトからTypeScriptに移行する場合  
  エラーだらけになるためはじめは`false`にしておく

- **`"noImplicitAny": false`**  
暗黙的なany型を許容する設定  

- 参考サイト
  - [tsconfig.jsonを設定する](https://typescriptbook.jp/reference/tsconfig/tsconfig.json-settings)
  - [TSConfig Reference](https://runebook.dev/ja/docs/typescript/-index-)
  - [公式リファレンス](https://www.typescriptlang.org/ja/tsconfig)
