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

## Getting Started with ESLint

Article on ESLint: [Getting Started](https://eslint.org/docs/user-guide/getting-started)

We need to install and initialize ESLint.

```bash
npm i --save-dev eslint babel-eslint eslint-watch eslint-plugin-react
```

## Add Linting for ES6, JSX and React Hooks

Create our ESLint configuration file in the root directory of our project:

#### `.eslintrc` (ESLint Config)

```json
{
  "plugins": [
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "extends": [],
  "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "double"]
  },
  "settings": {
    "react": {
      "version": "16.9"
    }
  }
}
```

Before we can run our linter, let's add a `lint` and `lint:fix` script to our `package.json` just above the test script:

```json
    "lint": "eslint app --ext .js,.jsx",
    "lint:fix": "eslint --fix app --ext .js,.jsx",
```

Again, they are made to work specifically with React hence the `.js` and `.jsx` file extensions. Now let's run our linter.

```bash
npm run lint
```

Right away we get some errors:

```bash
✖ 6 problems (6 errors, 0 warnings)
  6 errors and 0 warnings potentially fixable with the `--fix` option.
```

This is great, it means our linter is working. But as a team, let's assume that we do not want to follow the double quote rule and we only want to follow the semi-colon rule. Let's make the following changes to the `.eslintrc` file:

```json
    "semi": ["warn", "always"],
    "quotes": ["off", "double"]
```

At this point we should not get any errors.  We can turn off the quotes as shown above, or completely remove it. If you would like to test the linter one more time, try removing some semi-colons and running it again.

### Adding linting for React Hooks

Some rules that we may want to apply are not built into ESLint because they are framework specific and we are working in React. If we want to apply the suggested rules for using Hooks in React, we need to add a new package that can be used as a plugin, we already have one plugin added and set up for JSX, but let's show how to add another one.

Let's install the package we need:

```bash
npm i --save-dev eslint-plugin-react-hooks
```

First we will add `react-hooks` to the plugin section the `.eslintrc` file:

```json
    "react",
    "react-hooks"
```

then, we will add the rule to the rules section the `.eslintrc` file:

```json
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "semi": ["warn", "always"],
    "quotes": ["off", "double"]
```

To check the plugin is working, replace the first line in `App.js` with:

```jsx
import React, { useEffect } from 'react';
useEffect(() => {
  console.log("This should trigger our Hooks rule");
});
```

Run our linter again and you should get a warning, appended to the end is the rule responsible for this error `react-hooks/rules-of-hooks`:

```bash
C:\dev\workshops\2019-devreach-react-workshop\app\App.js
  2:1  error  React Hook "useEffect" cannot be called at the top level. React Hooks must be called in a React function component or a custom React Hook function  react-hooks/rules-of-hooks
```

Discard our changes in `App.js` Our Hooks linting is working.

Let's use a rule that will work with our `react` plugin!
In the [JSX-specific-rules section of their documentation]((https://github.com/yannickcr/eslint-plugin-react#jsx-specific-rules)) we can see a rule for no duplicate props.

Add the following to the `.eslintrc` file's rule's section:

```json
    "react/jsx-no-duplicate-props": "error",
```

We could then go into our `index.js` file and add duplicate props:

```jsx
ReactDOM.render(<App isTrue={true} isTrue={false} />, document.getElementById("root"));
```

And we get the following error:

```bash
C:\dev\workshops\2019-devreach-react-workshop\app\index.js
  6:36  error  No duplicate props allowed  react/jsx-no-duplicate-props
```

Again, the rule that triggered this error is listed at the end of the error.

This next change will probably have no effect, but let's update the React version in our `.eslintrc` file, ensure that it matches the version of React you have installed:

```json
 "settings": {
    "react": {
      "version": "16.10"
    }
  }
```

Great, linting is working and I can leave exploring new rules up to you! This concludes the linting section of the workshop. Next up is some prep work needed to create a responsive frame for our application.

## Create App Frame with Semantic HTML and Sass

Our app will live in this frame. Since we will lean on KendoReact in this app, lets add the package and style we need for that.

```bash
npm i @progress/kendo-theme-material@3.3.3
```

That package gives us a stylesheet we can use and we need to put it into the `App.js` file, right between our `normalize.css` import and our `App.scss` imports. The order is important, we want our `App.scss` to override it if needed:

```jsx
import 'normalize.css';
import '@progress/kendo-theme-material/dist/all.css';
import './App.scss';
```

We need a component `Frame.js`. It's going to contain the shell of our application consisting of an outer `div` tag called `app-container` and inside of that, a semantic HTML structure:

```jsx
<div className={`app-container`}>
  <main>
    <header></header>
    <section></section>
    <footer></footer>
  </main>
</div>
```

- The app-container `<div>` contains the main and `Sidenav` component.
- `<main>` contains header, section and footer.
- `<header>` will contain a `Logo` and `Topnav` component.
- `<section>` will house our React Router.
- `<footer>` will contain one component named `Footer`.

We can see the semantic tags mixed with our React Components below:

```jsx
<div className={`app-container`}>
  <main>
    <header>
      <Logo />
      <Topnav />
    </header>
    <section>
      {/* Routes Load Here */}
    </section>
    <footer>
      <Foot />
    </footer>
  </main>
  <Sidenav />
</div>
```

We will use a combination of Flexbox and CSS Grid styles in conjunction with these semantic HTML tags to create a solid layout. Before we add those styles, let's get the files we need set up, and the navigation working and switching routes.

### The Frame

Create a new file in the `app` directory called `Frame.js`.

### Create Sub-Directories For Components

Inside `app` directory, create two sub-directories: `partial-components` and `view-components`.

### Create View Component Files

Inside the `view-components` directory create two files: `Home.js` and `Events.js`.

### Create Partial-View Component Files

Inside the `partial-components` directory create seven files: `Logo.js`, `Menu.js`, `Foot.js`, `Sidenav.js`, `Sidenav.scss`, `Topnav.js`, and `Topnav.scss`.

### Filling in the Blanks

Below is the code for each file we created:

#### `Home.js` (View Component)

```jsx
import React, { useEffect } from 'react';
const Home = () => {
  useEffect(() => {document.title = `Home Page`},[])
  return (
    <div className="view-home">
      <h3>Next Launch</h3>
      {/* Launch Component */}
    </div>
  )
}
export default Home;
```

#### `Events.js` (View Component)

```jsx
import React, { useEffect } from 'react';
const Events = () => {
  useEffect(() => {document.title = `SpaceX Historical Events`});
  return (
    <div className="view-events">
      <h3>Historical Events</h3>
    </div>
  )
}
export default Events;
```

#### `Logo.js` (Partial-View Component)

```jsx
import React from 'react';
const Logo = () => {
  return (
    <div className={`logo`}>
      <span className="k-icon k-i-play"style={
        { marginTop: `-2px`, transform:`rotate(-90deg)` }
      }></span> <span>SpaceX</span>
    </div>
  )
}
export default Logo;
```

#### `Menu.js` (Partial-View Component)

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
const Menu = () => {
  return (
    <ul style={{userSelect: 'none'}}>
      <li className="link">
        <NavLink tabIndex="2" exact activeClassName="active" to="/">Home</NavLink>
      </li>
      <li className="link">
        <NavLink tabIndex="3" activeClassName="active" to="/todos">To Do's</NavLink>
      </li>
      <li className="link">
        <a tabIndex="4" href="https://github.com/httpJunkie/2019-devreach-react-workshop">
          Source Code <span className="k-icon k-i-hyperlink-open-sm"></span>
        </a>
      </li>
      <li className="menu"><span className="k-icon k-i-menu"></span></li>
    </ul>
  )
}
export default Menu;
```

Notice how the `Topnav.js` and `Sidenav.js` files below are nearly identical. They both simply import the menu (component reuse). Their styles (SCSS) will make them different laying out horizontally (Topnav) vs vertically (Sidenav).

#### `Topnav.js` (Partial-View Component)

```jsx
import React from 'react';
import './Topnav.scss';
import Menu from './Menu';
const Topnav = () => {
  return (
    <div className={`topnav`}>
      <Menu />
    </div>
  )
}
export default Topnav;
```

#### `Topnav.scss` (Stylesheet)

```scss
.topnav {
  width: 70%;
  display: flex;
  justify-content: flex-end;
}
  
.topnav ul { padding: 0; }
.topnav ul { display: flex; margin: 0; }
.topnav ul li { list-style-type: none; }
.topnav ul > li:not(:last-child) { margin-right: 15px; }
.topnav ul > li a { color: #212529; }
.topnav ul > li.menu { cursor: pointer; cursor: hand; }
```

#### `Sidenav.js` (Partial-View Component)

```jsx
import React from 'react';
import './Sidenav.scss';
import Menu from './Menu';
const Sidenav = () => {
  return (
    <div className={`sidenav`}>
      <Menu />
    </div>
  )
}
export default Sidenav;
```

#### `Sidenav.scss` (Stylesheet)

```scss
.sidenav ul {
  display: flex;
  flex-direction: column;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
}
.sidenav li {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 60px;
}
.sidenav li > a {
  margin-left: 1em;
}
.sidenav li:last-child {
  display: none;
}
.active {
  font-weight: bold;
}
.sidenav {
  background-color: #EFEFEF;
  color: #222222;
}
.sidenav li {
  border-bottom: 1px solid #555555;
}
```

#### `Foot.js` (Partial-View Component)

```jsx
import React from 'react';
const Foot = () => {
  return (
    <div className="foot">
      🌌 The Boldly Go Company
    </div>
  );
}
export default Foot;
```

Now that we have each of those files created, let's put it all together in our `Frame.js` and include our routing and everything we need to lazy load our view-components, etc...

Video: [Code Splitting with React and React Router v4](https://www.youtube.com/watch?v=bUlkq3PDfRY&t=762s)

At it's most basic, Lazily loading your Events component means that the data that is a part of that page does not get fetched and loaded if you visit that route.

#### `Frame.js`

```jsx
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
const Home = lazy(() => import('./view-components/Home'));
const Events = lazy(() => import('./view-components/Events'));
const LoadingMessage = () => `loading...`;
import Logo from "./partial-components/Logo";
import Sidenav from "./partial-components/Sidenav";
import Topnav from "./partial-components/Topnav";
import Foot from "./partial-components/Foot";
const Frame = () => {
  return (
    <BrowserRouter>
      <div className={`app-container`}>
        <main>
          <header>
            <Logo />
            <Topnav />
          </header>
          <section>
            <Switch>
              <Suspense fallback={<LoadingMessage />}>
                <Route exact path="/" component={Home} />
                <Route exact path="/events" component={Events} />
              </Suspense>
              <Route render={() => <h2>404 Page Not Found</h2>} />
            </Switch>
          </section>
          <footer>
            <Foot />
          </footer>
        </main>
        <Sidenav />
      </div>
    </BrowserRouter>
  );
};
export default Frame;
```

We will now need to add the `Frame` component to our `App` component:

#### `App.js` (Load Our Frame)

```jsx
import React from 'react';
import 'normalize.css';
import '@progress/kendo-theme-material/dist/all.css';
import './App.scss';
import Frame from './Frame';
const App = () => <Frame />;
export default App;
```

At this point our app is working, we have the classes and styles for our imported components, but we need to add styles to our `App.scss` page that use flexbox and CSS Grid to position our header, section, footer and logo, navigation and some basic text and link styles. Replace what is in the `App.scss` page with the following:

#### `App.scss` (Stylesheet)

```scss
.app-container {
  display: flex;
  height: 100vh;
  font-family: "Lato", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}
p {
  font-size: 1em;
  max-width: 80%;
}
a {
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.25em;
}
a {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  background-position-y: 1.1em;
  transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
}
a:hover,
a:visited:hover,
a:active:hover {
  text-decoration: none;
  background-size: 100% 4px;
}
a:focus,
a:visited {
  text-decoration: none;
  background-size: 0% 4px;
}
.k-grid-header-wrap a {
  background-image: none;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: auto;
  transition: none;
}
a:active {
  background-color: 555;
}
main {
  width: 100%;
  display: grid;
  grid-template-rows: 60px auto 50px;
}
/* Side Navigation */
.sidenav {
  min-width: 150px;
  height: 100vh;
}
/* Top Navigation */
header {
  display: flex;
  height: 60px;
  font-size: 18px;
}
.logo {
  width: 20%;
  margin: 1em;
  font-size: 20px;
}
.topnav {
  width: 80%;
  margin: 1.2em;
}
/* Content Section */
section {
  border-top: 1px solid #010101;
  background-color: #fff;
  height: calc(100% - 2em);
  padding: 1em;
}
/* Footer */
footer {
  height: 50px;
}
footer div {
  margin-left: 1em;
  margin-top: 1em;
}
```

### A Walkthrough Each File and Styles

I know that we have added a lot of styles blindly, so we'll take time in our workshop to go over the structure and what exactly is going on.

This concludes building our App Frame section.

Run `npm start` and your app should look similar to this:

![site preview](https://imgur.com/dGry2ub.jpg)

In our next section, we will make the frame responsive and get a crash course in React Hooks and Context API.

## Making Our App Frame Responsive

Let's install and use our first React Hook in this project called [react-media-hook](https://www.npmjs.com/package/react-media-hook):

```bash
npm i react-media-hook
```

It has two APIs we can try: `useMedia('(min-width: 600px)')` will recieve an object similar to using [matchMedia()](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia#JavaScript) in JavaScript:

```js
import { useMedia } from "react-media-hook";
const matchMediaObject = useMedia('(min-width: 600px)');
```

In this case, `matchMediaObject` could equal something like:

```json
{
  matches: true
  media: "(min-width: 600px)"
}
```

This is a bit overkill and we just need a boolean. We can instead try `useMediaPredicate('(min-width: 600px)')` which will return a boolean based on our media query that we passed in matching. So we can do something this:

```js
import { useMediaPredicate } from "react-media-hook";
const isMedium = useMediaPredicate('(min-width: 600px)');
```

Now, `isMedium` will be `true` when our browser is at least 600 pixels or greater and `false` when less than 600 pixels.

We'll use that `true` or `false` value to add a `'small'` or `'medium'` class to our `app-container` div inside `Frame.js`.

let's import `useMediaPredicate` into `Frame.js` just below our `react-router` import:

```js
import { useMediaPredicate } from "react-media-hook";
```

Then, above our return statement in the same file, add:

```js
const isMedium = useMediaPredicate("(min-width: 600px)");
const breakpoint = isMedium ? "medium" : "small";
```

Next, add a class to the `app-container` div using  `${breakpoint}` inside our string interpolation:

```jsx
<div className={`app-container ${breakpoint}`}>
```

To see this working, run the project and inspect the `app-container` div with F12 (dev tools). Watch the class name change as we resize the browser encountering that 600-pixel threshold.

![site preview](https://imgur.com/OE4tGa3.gif)

With that in place, let's hide the top navigation links and show the menu button on small and visa versa on medium. To do this, replace the last line of `Topnav.scss`:

```scss
.topnav ul > li.menu { cursor: pointer; cursor: hand; }
```

With the following:

```scss
.app-container.small .topnav ul > li.link { display: none; }
.app-container.medium .topnav ul > li.link { display: auto; }
.app-container .topnav ul > li.menu { cursor: pointer; cursor: hand; }
.app-container.small .topnav ul > li.menu { display: auto; }
.app-container.medium .topnav ul > li.menu { display: none; }
```

Next, append the following code to the end of the `Sidenav.scss` file:

```scss
.app-container.small .sidenav { display: auto; }
.app-container.medium .sidenav { display: none; }
```

We will also enable a default ensuring the `Sidenav` is closed initially (even on small). To do that we create a global state object with Context API and Hooks, specifically `useState`(a built in React Hook).

### Adding Context to Our App

Create a file that will house our Context Provider by creating a folder called `context` inside the `app` directory. Then, inside create the file: `AppContext.js` using the following code:

```js
import React, { useState, createContext } from 'react';
const AppContext = createContext();
const AppProvider = props => {
  const [appData, setApp] = useState({
    navOpen: false,
    toggleSidenav: value => setApp(data => (
      { ...data, navOpen: value }
    )),
  });
  
  return <AppContext.Provider value={appData}>{props.children}</AppContext.Provider>
}
export { AppContext, AppProvider };
```

Here we import `useState` and `createContext`. Next, we create a context instance named `AppContext`. We then set up an `AppProvider` using the render props pattern. We declare a Hook with `useState`, pass in an object with properties, defaults and methods. In this case, the object has a property named `navOpen`, and a method called `toggleSidenav()` which can be used to update the value of the `navOpen` property.

Our `AppProvider` works by returning an `<AppContext.Provider>` component with access to our `appData` which we pased in. It receives that state as props, and gives its children access to it.

### Provide Context to Our Entire App

Next, we need to have access to this state in many places in our app. We want any component to be able to have access to its data, so we need to place the `<AppProvider>` component at the highest level in our component tree. To wrap all components, we must place it in the `App.js` file.

Add the following import to the `App.js` file:

```jsx
import { AppProvider } from './context/AppContext';
```

And replace the line:

```js
const App = () => <Frame />;
```

With the following:

```jsx
const App = () => {
  return(
    <AppProvider>
      <Frame />
    </AppProvider>
  )
};
```

This will give any component in our application access to our context by wrapping the `<Frame>` component with the `<AppProvider>` component by way of render props.

### Consuming Context in Our App

We want to import our `AppContext` into our `Menu.js` file and our `Sidenav.js` file and consume it with `useContext`.

#### `Menu.js`

Import `useContext` and the `AppContext` from the provider:

```jsx
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from "../context/AppContext";
```

Just above the return statement, we will add our context with a call to `useContext`:

```jsx
const context = useContext(AppContext);
```

We tap into that context and change the state of `navOpen` when clicking the menu icon or pressing Enter upon focus.

Replace the last `<li></li>` with:

```jsx
      <li className="menu">
        <i className="k-icon k-i-menu"
          onKeyPress={event => {
            if (event.key === "Enter") {
              context.toggleSidenav(!context.navOpen);
            }
          }}
          onClick={() => {
            context.toggleSidenav(!context.navOpen);
          }}
        ></i>
      </li>
```

#### `Sidenav.js`

Import `useContext` and the `AppContext` from the provider:

```jsx
import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
```

Just above the return statement, we will add our context with a call to `useContext`:

```jsx
const context = useContext(AppContext);
```

Last, we alter the className of the parent div with `'show'` or `'hide'` based on the value of the `context.navOpen`:

```jsx
    <div className={`sidenav ${context.navOpen ? 'show' : 'hide'}`}>
      <Menu />
    </div>
```

#### `App.scss`

We also need to update a section of `App.scss`. Look for a comment: `/* Side navigation */` and replace it and it's following style with:

```scss
/* Side Navigation */
.sidenav,
.sidenav.show {
  min-width: 150px;
  height: 100vh;
}
.sidenav.hide {
  display: none;
}
```

Now when we click on the menu icon, it will set the state to it's oposite value, and our `Sidenav` component will re-render the new class and the CSS will hide or show the sidenav panel.

![](https://imgur.com/5IDnsx7.gif)

This concludes our "Creating a Semantic and Responsive Frame (Part 2)" section. Next, we will round out our frame by adding a theme toggle using the [Kendo UI Sass Theme Builder](https://themebuilder.telerik.com/kendo-ui), another piece of global state to track `'light'` and `'dark'` and add a KendoReact `Switch` component in the footer to toggle on the fly between light and dark mode.

## Alternate theme with Kendo, Context API and Hooks

Having a dark theme is typically a good option to add to your site, having a light vs dark theme can help the experience and accessibility if done right. 

We need to think about our custom styles like background and text color, how they change for each theme.  We also have a suite of components we will be using from KendoReact, which are themeable (common for CSS frameworks and component libraries). 

The first step is to get the custom stuff matching with our component theme.

### Matching The KendoReact Theme to Our Custom Styles

We already have a light theme going on, so we will start there. KendoReact has a Default, Bootstrap and Material Design theme that I can choose from many light themes and can get us started using the [Kendo UI Sass Theme Builder](https://themebuilder.telerik.com/kendo-ui).

Once downloaded, unpack the compressed files in place. We will put the files for each theme in a new directory called `app\sass\`. 

![](https://imgur.com/Dum6T4B.gif)

We will name the package `blue-pink-light` and once downloaded and unpacked we will have two files inside: `all.css` and `variables.scss`. Rename `all.css` to `all.scss`.

We are going to import these two files into our existing `App.scss` through a nested Sass selector and this will namespace (scope) our theme to `app-container.light`.

Inside our `App.js`, we have stylesheets loading in order:

```jsx
import 'normalize.css';
import '@progress/kendo-theme-material/dist/all.css';
import './App.scss';
```

We want to inject these files after the `kendo-theme-material/dist/all.css` file. Inside `App.scss` is perfect. 

Add a class to our `app-container` div in `Frame.js`. We will hard-code it to be just `'light'` for now. Eventually this class wil be bound to our `themeMode` property in our global state.

```scss
<div className={`app-container ${breakpoint} light`}>
```

We make our application more flexible with a two theme setup. With this class, we can now create a nested SCSS selector to encapsulate the light vs dark theme through namespacing. 

Replace `App.scss` with:

```scss
.app-container {
  display: flex;
  height: 100vh;
  font-family: "Lato", sans-serif;
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
}

p {
  font-size: 1em;
  max-width: 80%;
}

a {
  color: inherit;
  text-decoration: none;
  margin-bottom: 0.25em;
}
a {
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  background-position-y: 1.1em;
  transition: background-size cubic-bezier(0, 0.5, 0, 1) 0.3s;
}
a:hover,
a:visited:hover,
a:active:hover {
  text-decoration: none;
  background-size: 100% 4px;
}
a:focus,
a:visited {
  text-decoration: none;
  background-size: 0% 4px;
}
.k-grid-header-wrap a {
  background-image: none;
  background-position: 0;
  background-repeat: no-repeat;
  background-size: auto;
  background-position-y: auto;
  transition: none;
}
a:active {
  background-color: 555;
}

main {
  width: 100%;
  display: grid;
  grid-template-rows: 60px auto 50px;
}

/* Side Navigation */
.sidenav,
.sidenav.show {
  min-width: 150px;
  height: 100vh;
}
.sidenav.hide {
  display: none;
}

/* Top Navigation */
header {
  display: flex;
  height: 60px;
  font-size: 18px;
}
.logo {
  width: 50%;
  margin: 1em;
  font-size: 20px;
}
.topnav {
  width: 50%;
  margin: 1.2em;
}

/* Content Section */
section {
  height: calc(100% - 2em);
  padding: 1em;
}

/* Footer */
footer {
  height: 50px;
}
footer div {
  margin-left: 1em;
  margin-top: 1em;
}

/* Light Theme */
.app-container.light {
  header {
    background-color: #FFFFFF;
    color: #222222;
  }
  section {
    border-top: 1px solid #010101;
    background-color: #FFFFFF;
    color: #222222;
  }
  section a {
    background-color: #EEEEEE;
  }
  footer {
    background-color: #FFFFFF;
    color: #222222;
  }
  input {
    color: #222222;
  }

  /* Kendo material Light*/
  @import "/sass/blue-pink-light/all.scss";
  @import "/sass/blue-pink-light/variables.scss";
}
```

Our new "Light Theme" has a nested `@import`. Understand how this works, and how namespacing is being applied. We moved some properties from the old code into this new specific SCSS selector mathcing: `app-container.light`.

The only modification I did to the originall was that I moved the following properties:

```scss
  section {
    border-top: 1px solid #010101;
    background-color: #FFFFFF;
    color: #222222;
  }
```

Into a new selector giving it more specificity. 

```scss
.app-container.light {
  section {
    border-top: 1px solid #010101;
    background-color: #FFFFFF;
    color: #222222;
  }
}
```

Now styles like size and position that need to be consistent over both themes are all at the root level of the document. Colors and text, things that are specific to each theme are extracted into the namespace of `light`. 

For changing the theme from light to dark in the UI we will use a KendoReact `Switch`.

### Adding KendoReact Components

The [KendoReact Switch](https://www.telerik.com/kendo-react-ui/components/inputs/switch/) is part of the [KendoReact Inputs](https://www.telerik.com/kendo-react-ui/components/inputs/) documentation which shows us what to `npm install` and what to `import` into the component and it's JSX. So let's install it.

```bash
npm i @progress/kendo-react-inputs @progress/kendo-react-intl @progress/kendo-drawing
```

With that installed, let's update our `Foot.js` page with an import and add the component to the JSX:

```jsx
import React from 'react';
import { Switch } from '@progress/kendo-react-inputs';
const Foot = () => {
  return (
    <div className="foot">
      🌌 The Boldly Go Company | &nbsp;
      <Switch
        onLabel={"light theme"}
        offLabel={"dark theme"}
      />
    </div>
  );
}
export default Foot;
```

Great, our `Switch` is on the page, it has a blue highlight when turned on, your page should look and behave like the animation below:

![](https://imgur.com/PBKfu9A.gif)

What we now need to do is wire this switch up to toggle the theme. If we visit the [KendoReact Switch documentation](https://www.telerik.com/kendo-react-ui/components/inputs/switch/) we would find that it has an `onChange()` we tap into.

### Wiring up Our Switch to Work with Our Context

The `Switch` component is setup, and we will need to create another propety in our global state that we can affect when this `Switch` is turned on and off, but first I want to show you how we can possibly tell the users preferred theme.

### Checking the User's Preferred Color Scheme

We will take advantage of a media query named `refers-color-scheme`. Normally you could call this in CSS and do something like:

```scss
@media (prefers-color-scheme: dark) {
  body {
    background: #111;
    color: #eee;
  }
}
```

We just used `react-media-hook` to check a minimum width on the browser, and everytime it changes, we can react to those changes in our component and display the correct breakpoint:

```js
import { useMediaPredicate } from "react-media-hook";
let breakpoint = useMediaPredicate("(min-width: 600px)") ? "medium" : "small";
```

We can do the same thing for `prefers-color-scheme`, but first we need to import `useMediaPredicate` into our `AppContext.js` file:

```js
import { useMediaPredicate } from "react-media-hook";
```

Then we can add a constant named `preferredTheme` to the `AppProvider` component inside the `context/AppContext.js` file. Drop this line of code, just above the `appData` state:

```js
const preferredTheme = useMediaPredicate("(prefers-color-scheme: dark)") ? "dark" : "light";
```

This gives me an easy way to know if the user prefers `'dark'` vs `'light'` on their device. It returns `true` if it matches.

Next, we will add the following code to our AppProvider's `appData` default object, put this just after `toggleSidenav()` method:

```js
    themeMode: localStorage.getItem('kr_todo_theme') || preferredTheme,
    changeTheme: mode => setApp(data => (
      {...data, themeMode: mode }
    ))
```

This checks localStorage first, because if the user has a saved theme preference with us, we prioritize that. Otherwise we fallback to `preferredTheme`. The values I can expect to get back are: `['dark','light','no-preference']`, as found in the docs on mozilla.org: [Mozilla page for `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme).

We check for `'dark'` first because if they don't have that as `prefers-color-scheme`, we know that we want to fall back to `'light'` because they either prefer `'light'` or they have `'no-preference'` meaning we still default to light mode.

### Side Effect Needed When `themeMode` Changes

We should know a little about `useEffect()`, enough to understand that it is the mechanism used in conjunction with hooks and state to set our `localStorgage` each time we change it with the `Switch`. So we will add a `useEffect` right here inside the AppProvider, and it will run anytime that `appData.themeMode` get's changed.

Let's first import `useEffect`:

```js
import React, { useState, useEffect, createContext } from "react";
```

We can `useEffect` just below where we setup our AppProvider's `useState` hook and simply `setItem` on our localStorage. This thing fires on first render and depends on the `[app.Data.themeMode]` in it's dependency array meaning that it will only rerender when `themeMode` receives changes.

```js
  useEffect(() => {
    localStorage.setItem('kr_todo_theme', appData.themeMode)
    }, [appData.themeMode]
  );
```

### Getting back to Our Switch

Let's get back to the `partial-components/Foot.js` file and import `useContext` from `'react'` and `AppContext`:

```js
import React, { useContext } from 'react';
import { AppContext } from "../context/AppContext";
```

Create a constant named `context` to make our global state available in the `Foot` component at the top level along with a value that we can reference to check if the current mode `isLight`:

```js
const context = useContext(AppContext);
const isLight = context.themeMode === 'light';
```

We can now add a handler for our `Switch` component, just above the return statement we need to handle the switches `onChange` and set the new value for `themeMode` by passing the opposite theme state as the next value:

```js
  const handleSwitch = () => {
    context.changeTheme(isLight ? 'dark' : 'light');
  }
```

Finally we just need to update the `Switch` component. Add an `onChange()` handler that calls our `handleSwitch()` function. And we also check to see what the current value is for `context.themeMode` and make sure the `Switch` is flipped to the right position:

```jsx
      <Switch
        onChange={handleSwitch}
        checked={isLight}
        onLabel={"light theme"}
        offLabel={"dark theme"}
      />
```

### Adding a Theme CSS Class to `app-container`

Now that the `Switch` works and changes the `context.themeMode` when we click it, we need our `app-container` div inside of `Frame.js` to reflect this class. First we will import `useContext` and `AppContext` into the `Frame.js` page:

```js
import React, { useContext, lazy, Suspense } from "react";
import { AppContext } from "./context/AppContext";
```

Next we need to create a const named `context` at the top level of our `Frame` component, just above our `isMedium` constant:

```js
const context = useContext(AppContext);
```

Now we can bind one of our classes on the `app-container` div to this `context.themeMode`:

```js
<div className={`app-container ${breakpoint} ${context.themeMode}`}>
```

We should be able to see the class changing if we run the project and inspect the `app-container` div:

![](https://imgur.com/PBKfu9A.gif)

Although our `Switch` is functional, we need to add the dark theme from the [Kendo UI Sass Theme Builder](https://themebuilder.telerik.com/kendo-ui) and have the CSS respond and switch to a dark theme, we will need to add code to the `App.scss`, `Sidenav.scss` and `Topnav.scss` to achieve this.

### Going Dark Mode

We need to get a dark Material Design theme from the [Kendo UI Sass Theme Builder](https://themebuilder.telerik.com/kendo-ui). I'm getting the theme named `'cyan-amber-dark'`.

![](https://imgur.com/FV3Peeh.gif)

Once downloaded, unpack the compressed files in place, you should now have an `app\sass\cyan-amber-dark` folder with two files inside: `all.css` and `variables.scss`. Rename `all.css` to `all.scss`.

We will import these files into our `App.scss` file and nest them inside of an SCSS selector and this will scope certain styles to the CSS namespace of `app-container.light`.

We want to inject these files after the `kendo-material-theme`, just like we did with the light theme earlier in `App.scss`. We need to create another nested SCSS set of styles for the dark theme. It will have a comment above it, just as the light mode version, let's paste this one right under the light theme code in the `App.scss` file:

```scss
/* Dark Theme */
.app-container.dark {
  header {
    background-color: #010101;
    color: #FFFFFF;
  }
  section {
    border-top: 1px solid #EFEFEF;
    background-color: #010101;
    color: #FFFFFF;
  }
  section a {
    background-color: #333333;
  }
  footer {
    background-color: #010101;
    color: #FFFFFF;
  }
  input {
    color: #FFFFFF;
  }

  /* Kendo material dark*/
  @import "./sass/cyan-amber-dark/all.scss";
  @import "./sass/cyan-amber-dark/variables.scss";
}
```

I have simply copy-and-pasted the Light theme `.app-container.light` selector and renamed it to `.app-container.dark`, reset all of the property values and imported the files from the `cyan-amber-dark` directory: `all.css` and `variables.scss` at the end, just as we did in the light theme.

### Sidenav and Topnav Theming

We have some CSS in two other files will also need some light and dark treatment:

#### Add Dark Theme to `Sidenav`

From the `Sidenav.scss` we will replace the following code:

```scss
.sidenav {
  background-color: #EFEFEF;
  color: #222222;
}
.sidenav li {
  border-bottom: 1px solid #555555;
}
```

And put this in its place:

```scss
/* Light Theme */
.app-container.light {
  .sidenav {
    background-color: #EFEFEF;
    color: #222222;
  }
  .sidenav li {
    border-bottom: 1px solid #555555;
  }
}

/* Dark Theme */
.app-container.dark {
  .sidenav {
    background-color: #1e1e1e;
    color: #FFFFFF;
  }
  .sidenav li {
    border-bottom: 1px solid #EFEFEF;
  }
}
```

#### Add Dark Theme to `Topnav`

From the `Topnav.scss` we appended the following styles to the end of the file:

```scss
/* Light Theme */
.app-container.light {
  .topnav ul > li a {
    color: rgb(33, 37, 41);
  }
}

/* Dark Theme */
.app-container.dark {
  .topnav ul > li a {
    color: rgb(240, 240, 240);
  }
}
```

If you have not stopped your project, you will need to now and run `npm start` again. With the project restarted you should get the full theme switching experience:

![](https://imgur.com/JgUqGCe.gif)

This concludes our section on creating a theme and making it toggle from light to dark on the fly. 
