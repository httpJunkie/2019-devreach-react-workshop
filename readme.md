# Let’s Build an App with React (Devreach 2019 Workshop)

This readme.md will serve as your guide to putting our instruction into practice. Each commit to this repository will add new instructions to this `readme.md` file. Each commit corresponds with a portion of the workshop that you will build.

Every portion of this workshop is started and indicated in this document by a level 2 heading. A new lesson and instruction for each phase of the workshop is added with each commit to this repository. We will start with “Hello React” below.

## “Hello React” with Webpack & Babel

Welcome to the 2019 DevReach: “Let’s Build an App With React” workshop. We'll get started building our React toolchain.

### Create Project Folders and Initialize npm

```bash
mkdir space-x-app
```

```bash
cd space-x-app
```

```bash
npm init
```

```bash
mkdir app
```

```bash
code .
```

We now have a `package.json` and `app` directory, let's also create the following files in the root directory:

- `.gitignore`
- `webpack.config.babel.js`

And inside the `app` directory create the following files:

- `index.js`
- `index.html`
- `App.js`
- `App.scss`

### Dev Dependencies for React

I created three separate commands for installing our dev-dependencies grouped by which ones are related. Let's install each all of them!

`npm i --save-dev webpack webpack-cli webpack-dev-server html-webpack-plugin`

`npm i --save-dev @babel/core @babel/preset-env @babel/preset-react`

`npm i --save-dev babel-loader node-sass file-loader sass-loader style-loader css-loader url-loader`

### Create Build/Start Scripts to Run Webpack & Dev-server

We need to add a `build` and `start` command in our `package.json`'s scripts right next to the existing test script:

```json
    "test": "echo \"No test script\"",
    "build": "webpack",
    "start": "webpack-dev-server --open"
```

### Add Babel & Presets to `package.json`

Article about `preset-env`:[What is babel-preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/). K

now that each plugin is its own npm library and this one allows transpiling ES6 to legacy JS code. [`preset-react`](https://babeljs.io/docs/en/babel-preset-react) is just a bundle of other libraries:

- `@babel/plugin-syntax-jsx`
- `@babel/plugin-transform-react-jsx`
- `@babel/plugin-transform-react-display-name`

`preset-react` allows us to use JSX in conjunction with [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) and [React]([https://reactjs.org](https://reactjs.org/)).

Even in our most simple “Hello React” exanmple, we will need JSX, so let's add the following code to our `package.json` just above our scripts:

```json
"babel": {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react"
  ]
},
```

### Production Dependencies for “Hello React”

Articles on Normalize(`normalize.css`):

- [About Normalize CSS](http://nicolasgallagher.com/about-normalize-css/)
- [Normalize CSS or CSS Reset?](https://medium.com/@elad/normalize-css-or-css-reset-9d75175c5d1e)

Normalize is a modern CSS reset for cross-browser consistency considering the styling of HTML elements.

```bash
npm i --save react react-dom react-router-dom normalize.css
```

### Bootstrap Our App and Create Our First Component

Below we walk through the steps to bootstrap our `Index.html` file and get our React app working with our initial `App` component.

#### Index.html

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <title>SpaceX Events Home</title>
  <link href="http://fonts.googleapis.com/css?family=Lato:200,300,400" rel="stylesheet">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="Description" content="Author: Your Name">
</head>
<body>
  <div id="root"></div>
</body>
</html>
```

#### `index.Js` (JS Entrypoint/Bootstrapper)

```js
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

ReactDOM.render(<App />, document.getElementById("root"));
```

#### `App.js` (Initial Component)

```jsx
import React from 'react';

import 'normalize.css';
import './App.scss';

const App = () => <h1>Hello React</h1>;

export default App;
```

#### App.scss (Ensure Transpiling to Css Works)

An Article on Sass: [Why Sass](https://alistapart.com/article/why-sass/)

Why Sass(SCSS) over CSS? This is something we utilize in our project and without Sass we would not be able to easily create our light and dark theme (later on). If you would like to learn more about Sass/SCSS, [check out this article](https://alistapart.com/article/why-sass/).

```scss
body {
  background-color: #222;
}
h1 {
  padding: 0 0 0 1em;
  color: #61dafb;
  font-family: Lato;
}
```

#### `.Gitignore` (Assets Not Tracked by Git)

For more information on creating a `.gitignore` file and why we need them, see [this article ](https://help.github.com/articles/ignoring-files) for more info.

```
# dependencies
/node_modules

# testing
/coverage

# production
/build

# distribution
/dist
/public

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
```

#### `webpack.config.babel.js`

```
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./app/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          "css-loader", // translates CSS into CommonJS
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000"
      }
    ]
  },
  mode: "development",
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "app/index.html"
    })
  ]
};
```

With these files in place, run the project for the first time.

```bash
npm run start
```

### Init, Stage and Commit Our Files

You should get a page running on `http://localhost:8080` with a dark background and“Hello React” heading with no errors. This indicates that all of our configuration and styles are working and React is rendering an application for us!

Let's stop here and save our changes.

#### Initialize Our Git Repository in Place

From the root of our project, initialize git:

```bash
git init
```

We should notice our `.gitignore` working and hiding not tracking our `npm_modules` directory 😉!

#### Create an Empty Repository on Github

We need an empty repository on GitHub to push this project and its first commit to. Next, we will stage, commit and push to our origin's master:

```bash
git add .
```

```bash
git commit -m "Hello React (Webpack, Babel and React)"
```

```bash
git remote add origin https://github.com/httpJunkie/2019-devreach-react-workshop.git
```

```bash
git push -u origin master
```

### That's it for our “Hello React” portion of the workshop

We created our own [Webpack](https://webpack.js.org/), [Babel](https://babeljs.io/) & [React]([https://reactjs.org](https://reactjs.org/)) build ourselves, without using something like Create React App ([CRA](https://github.com/facebook/create-react-app)) to and because of this we are smarter about our application and have a better understanding of how a minimal React application works under the hood and how to build and run that application from a basic standpoint.

We will tackle linting in the next section.
