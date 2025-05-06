```sh
# プロジェクト作成
$ npm create vite@latest changeReact -- --template react-ts

$ npm install tailwindcss @tailwindcss/vite --prefix changeReact

vite.config.ts に以下を追加

// 追加
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    // 追加
    tailwindcss()
  ],
})

$ npm install -D prettier --prefix changeReact
# eslint と prettier のバッティングを防ぐライブラリをインストール
$ npm install -D eslint-config-prettier --prefix changeReact
# linter の eslint をインストール
$ cd changeReact
$ npm init @eslint/config
$ cd ..

# formatter の実行
$ npx prettier --prefix changeReact --write changeReact
$ npx eslint --config changeReact/eslint.config.mjs --fix changeReact

eslint.confg.js に以下を追加

  略
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: { globals: globals.browser },
    // 追加
    settings: {
      react: {
          version: 'detect',
      },
    },
  },
  tseslint.configs.recommended,
  // 追加
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
]);

# ディレクトリを指定し、ライブラリのインストール
$ npm install --prefix changeReact
# ディレクトリを指定し、ローカルサーバーを起動
$ npm run dev --prefix changeReact
```

- [margin: 0 auto; 水平方向の中央に配置 を TailwindCSS に置き換える](https://qiita.com/Hashimoto-Noriaki/items/3c2c7fe759895b26f53c)
  - `mx-auto`
- [React(TypeScript)でcanvas要素を扱う](https://qiita.com/free-coder/items/77fe0cf14283963edbcc)

- [useRef](https://kinsta.com/jp/knowledgebase/react-useref/)

- 更新されても再レンダリングが発生しないような（変更可能な）値を保存する

```ts
import { useRef } from 'react';

const myRef = useRef();

<div ref={myRef}>これは要素の例です</div>

// 値の参照
const myRefValue = myRef.current;
console.log(myRefValue);
```

- DOM要素への参照を保存すること

```ts
<script>
      const inputRef = document.getElementById('myInput');
      const focusButton = document.getElementById('focusButton');
      const handleFocus = function() {
        inputRef.focus();
      };
      focusButton.addEventListener('click', handleFocus);
</script>
```

```ts
import { useRef } from 'react';

const FocusComponent = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // 入力要素へのアクセス
    let inputElement = inputRef.current;

   // DOM要素を変更
   inputElement.focus();
  };

 return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
}
```
