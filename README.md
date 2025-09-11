# Jest

## 導入

### ①Jest と TypeScript と使用する際に必要なパッケージのインストール

```
npm install --save-dev jest ts-jest @types/jest
```

### ➁Jest 設定ファイルの生成

```
npx ts-jest config:init
```

初期の状態だと**ReferenceError: module is not defined**のエラーが発生する為、module.export を export default に書き換える。

```
/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
};
```

### ➂package.json で script の追加

```

"scripts": {
  "test": "jest"
}

```

### ④Option 警告を消したい場合

tsconfig.json に以下のコードを追加する

```
  "compilerOptions": { "esModuleInterop": true },
```

# React Testing Library

## 導入

### ①Jest と TypeScript と使用する際に必要なパッケージのインストール

```
npm i -D jest-environment-jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

### ➁jest.config.ts を修正する

```
/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["./jest.setup.ts"],
};
```

### ➂jest.setup.ts ファイルを作成する

```
import "@testing-library/jest-dom";
```

### ④tsconfig.app.json の compilerOptions の項目に以下内容を追加(testing-library/jest-dom のメソッド使用時のエラーを解消するためと、vercel デプロイ時の build エラー回避の為)

```
 "types": ["@testing-library/jest-dom"]
  "exclude": ["**/*.test.tsx", "**/*.test.ts"]
```

### ⑤tsconfig.json に以下の内容を記載

```
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "types": ["@testing-library/jest-dom"],
    "exclude": ["**/*.test.tsx", "**/*.test.ts"]
  }
}
```

## エラーが発生した場合

## 参考

TypeScript ではじめる Web アプリケーションテスト入門

### Testing Library

https://testing-library.com/docs/react-testing-library/example-intro

### Jest

https://jestjs.io/
