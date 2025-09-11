# Jest

## 導入

### ①JestとTypeScriptと使用する際に必要なパッケージのインストール
```
npm install --save-dev jest ts-jest @types/jest
```

### ➁Jest設定ファイルの生成
```
npx ts-jest config:init
```

初期の状態だと**ReferenceError: module is not defined**のエラーが発生する為、module.exportをexport defaultに書き換える。
```
/** @type {import('ts-jest').JestConfigWithTsJest} **/
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

### ④Option 警告を消したい場合
tsconfig.jsonに以下のコードを追加する
```
  "compilerOptions": { "esModuleInterop": true },
```


# React Testing Library

## 導入

### ①JestとTypeScriptと使用する際に必要なパッケージのインストール
```
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### ➁jest.config.tsを修正する
```
/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
```

### ➂jest.setup.tsファイルを作成する
```
import "@testing-library/jest-dom";
```

### ④tsconfig.app.jsonのcompilerOptionsの項目に以下内容を追加(testing-lubrary/jest-domのメソッド使用時のエラーを解消するため)
```
 "types": ["@testing-library/jest-dom"]

```

### ⑤tsconfig.jsonに以下の内容を記載
```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["@testing-library/jest-dom"],
  }
}
```

## エラーが発生した場合



## 参考
TypeScriptではじめるWebアプリケーションテスト入門

### Testing Library 
https://testing-library.com/docs/react-testing-library/example-intro

### Jest
https://jestjs.io/