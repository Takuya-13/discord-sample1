#### 開発環境

_◆ Node.js のインストール_  
[ここ](https://nodejs.org/ja)から。（どっちでもいいけど LST 版の方が無難）
インストール出来てるかの確認。cmd 開いて'node -v'コマンドを実行し、バージョン情報が出てくれば成功。

_◆ VSCode のインストール（他に好きなやつがあればエディターは何でも）_  
[ここから](https://code.visualstudio.com/)から。  
もし VSCode を使うなら、インストール後、↓ の拡張機能を入れとくと便利。  
・[Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)  
・[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) ソースを静的解析してくれるやつ  
・[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) コードフォーマッター

_◆ リポジトリのクローン_  
任意のディレクトリで`git clone {url}`（エディターのターミナルでも cmd でも）

_◆ パッケージのインストール_  
クローン完了後、discord-sample1 ディレクトリをエディターで開き、ターミナルから`npm install`コマンドを実行。

_◆ bot の起動_  
ターミナルから`node ./index.js`コマンドを実行。  
停止するときは`ctrl + c`。
