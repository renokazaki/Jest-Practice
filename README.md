# Jestの練習

## 導入

### ①JestとTypeScriptと使用する際に必要なパッケージのインストール
```
npm install --save-dev jest ts-jest @types/jest
```

### ➁Jest設定ファイルの生成
```
npx ts-jest config:init
```

初期の状態だと**ReferenceError: module is not defined**のエラーが発生する為以下の内容に書き換える。
```
/** @type {import("jest").Config} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

### ➂package.jsonでscriptの追加
```
"scripts": {
  "test": "jest"
}

```


