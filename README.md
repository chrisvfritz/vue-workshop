# Vue Workshop

> We'll cover everything you need to know to get started building world-class Vue applications. Topics will include configuring Webpack for single-file components, setting up the most advanced workflows currently possible, how to organize (and reorganize) increasingly complex applications, and more.

* [Development](#development)
* [Editors](#editors)
  * [Visual Studio Code](#visual-studio-code)
* [Formatting](#formatting)
* [Linting](#linting)
* [Aliases](#aliases)
* [HTML](#html)
  * [In the `<template>` of a [`.vue` file](https://vuejs.org/v2/guide/single-file-components.html)](#in-the-template-of-a-vue-filehttpsvuejsorgv2guidesingle-file-componentshtml)
  * [In a [`render` function](https://vuejs.org/v2/guide/render-function.html)](#in-a-render-functionhttpsvuejsorgv2guiderender-functionhtml)
* [JavaScript](#javascript)
  * [Polyfills](#polyfills)
  * [Vue](#vue)
  * [Vue Router](#vue-router)
  * [Vuex (state management)](#vuex-state-management)
* [(S)CSS](#scss)
  * [SCSS](#scss)
  * [Global CSS](#global-css)
  * [CSS Modules](#css-modules)
  * [Design variables](#design-variables)
* [Images, fonts, and other miscellaneous files](#images-fonts-and-other-miscellaneous-files)
  * [Importing assets in JavaScript](#importing-assets-in-javascript)
  * [Referencing assets in CSS](#referencing-assets-in-css)
  * [Referencing assets in HTML](#referencing-assets-in-html)
* [Tests](#tests)
  * [Unit tests](#unit-tests)
    * [Jest](#jest)
    * [vue-test-utils](#vue-test-utils)
    * [VS Code integration](#vs-code-integration)
  * [End-to-end tests](#end-to-end-tests)
    * [Cypress](#cypress)

## Development

```bash
# Install dependencies
# If you don't have yarn installed: `npm install --global yarn`
yarn install

# Launch and serve with live reload at localhost:9080
yarn dev

# build for production with minification
yarn build

# build for production and view the bundle analyzer report
yarn build --report

# check the formatting for all files
yarn format

# lint all source files
yarn lint

# lint all source files and fix issues, where available
yarn lint:fix

# run unit tests
yarn unit

# run unit tests in watch mode
yarn unit:watch

# run end to end tests
yarn e2e

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Editors

### Visual Studio Code

This project is best developed in VS Code. By installing the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions), you will get:

* Syntax highlighting for all files
* Intellisense for all files
* Format on save for all files
* Lint on save for all files
* In-editor results on save for unit tests

## Formatting

We use Prettier to format our JavaScript, S(CSS), and Markdown, ensuring a consistent style. In Visual Studio Code, installing the [recommended extensions](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions) will automatically format on save in any file.

## Linting

Linting is included for Vue, JavaScript, (S)CSS, and Markdown. The current rules are pretty opinionated, to not only avoid errors but also ensure a consistent style.

## Aliases

While relative paths can be used to import any file in our `src`, we also have a few useful aliases in [`build/aliases.js`](build/aliases.js).

## HTML

All HTML will exist within Vue components, either:

* in the `<template>` of a `.vue` file, or
* in the `render` function of a [functional component](https://vuejs.org/v2/guide/render-function.html#Functional-Components), optionally using [JSX](https://vuejs.org/v2/guide/render-function.html#JSX)

### In the `<template>` of a [`.vue` file](https://vuejs.org/v2/guide/single-file-components.html)

This will be the case for ~95% of HTML. What you're writing is "normal" HTML, but since Vue has a chance to parse it before the browser does, we can do a few extra things that normally aren't possible in a browser.

For example, any element or component can be self-closing:

```html
<span class="fa fa-comment"/>
```

The above simply compiles to:

```html
<span class="fa fa-comment"></span>
```

This feature is especially useful when writing components with long names, but no content:

```html
<InputFileUpload
  title="Upload any relevant legal documents"
  description="PDFs or scanned images are preferred"
  icon="folder-open"
/>
```

### In a [`render` function](https://vuejs.org/v2/guide/render-function.html)

Render functions are _alternatives_ to templates. Components using render functions will be relatively rare, written only when we need either:

* the full expressive power of JavaScript, or
* better rendering performance through stateless, [functional components](https://vuejs.org/v2/guide/render-function.html#Functional-Components)

These components can optionally be written using an HTML-like syntax within JavaScript called [JSX](https://vuejs.org/v2/guide/render-function.html#JSX).

## JavaScript

The JavaScript we use is compiled by stage 0 Babel, by way of Webpack. Configuration for Babel is in the `.babelrc` file at the root of this project and configurations for Webpack are in the `.electron-vue` folder, also at the root.

Babel allows us to write more modern JavaScript without having to worry about what's supported by Node/Chromium. If you're (relatively) new to features such as `const`, `let`, and `=>` (arrow functions), take some time to read about the following features in Babel's ES2015 guide:

* [Arrow functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this)
* [Template literals](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings)
* [Destructuring](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring)
* [Spread operator](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread)
* [`let`/`const`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const)
* [`for`...`of`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of)

Reading these sections alone will get you 99% of the way to mastering Babel code. It's also a good idea to read about Promises, if you don't yet feel comfortable with them. Here's a [good intro](https://developers.google.com/web/fundamentals/getting-started/primers/promises).

If you have any questions about any features, please don't hesitate to reach out, as it's obviously important that everyone understands our code and feels comfortable modifying it. 🙂

### Polyfills

Instead of using Babel's polyfills with [babel-plugin-transform-runtime](https://www.npmjs.com/package/babel-plugin-transform-runtime), we use the [Polyfill.io](https://polyfill.io/v2/docs/) service. This serves browser-specific polyfills, so that each visitor downloads the minimum code necessary to use the latest, polyfillable browser features.

### Vue

Since Vue is such a huge part of our app, I strongly recommend every read through the _Essentials_ of [Vue's guide](https://vuejs.org/v2/guide/).

### Vue Router

To understand how to manage pages with Vue Router, I recommend reading through the _Essentials_ of [those docs](https://router.vuejs.org/en/essentials/getting-started.html).

### Vuex (state management)

To wrap your head around our state management, I also recommend reading through [those docs](https://vuex.vuejs.org/en/intro.html), starting at _What is Vuex?_ and stopping before _Application Architecture_. Then skip down and read [_Form Handling_](https://vuex.vuejs.org/en/forms.html) and [_Testing_](https://vuex.vuejs.org/en/testing.html)

## (S)CSS

For our styles, we're using the SCSS modules, which you can activate by adding the `lang="scss"` and `module` attributes to style tags in Vue components:

```html
<style lang="scss" module>
  /* Styles go here */
</style>
```

Otherwise, the tag is assumed to just contain normal CSS.

### SCSS

SCSS is just a superset of CSS, meaning any valid CSS is _also_ valid SCSS. This allows you to easily copy properties from other sources, very much in the CodePilot.ai spirit. 😄 It also means you can stick to writing the CSS you're still comfortable with while you're learning to use more advanced SCSS features.

I specifically recommend reading about:

* [Variables](http://sass-lang.com/guide#topic-2)
* [Nesting](http://sass-lang.com/guide#topic-3)
* [Operators](http://sass-lang.com/guide#topic-8)

Those are the features you'll use 99% of the time.

### Global CSS

Only [`src/app.vue`](src/app.vue) should contain global CSS and even that should only include base element styling and some utility classes (e.g. for grid management).

### CSS Modules

As mentioned earlier, every Vue component will be a CSS module. That means the classes you define are not _actually_ classes. When you write:

```html
<!-- src/components/app-input.vue -->
<style lang='scss' module>
.inputLabel {
  /* ... */
}

.input {
  /* ... */
}
</style>
```

You're actually defining values on a `$style` property of the Vue instance such as:

```js
$style: {
  inputLabel: 'app-input__inputLabel__3EAebB_0',
  input: 'app-input__inputLabel__3EAebB_1'
}
```

The values contain automatically generated classes with:

* the name of the component
* the name of the class
* a random hash

Do you know what that means?! You can _never_ write styles that interfere with another component. You also don't have to come up with clever class names, unique across the entire project. You can use class names like `.input`, `.container`, `.checkbox`, or whatever else makes sense within the isolated scope of the component.

### Design variables

To import CSS from a Webpack alias, you must use the `~` prefix. So for example, to import `design.scss`, which is aliased to `@design` for convenience, you will write:

```scss
@import '~@design';
```

This makes all the variables in that file available in your component. These variables can also be made available in your JavaScript by placing them inside an `:export` in `design.scss` (see that file for more information).

## Images, fonts, and other miscellaneous files

These will all go in the `assets` folder and can be accessed from each language's module system.

### Importing assets in JavaScript

```js
import logo from '@assets/images/logo.png'
```

### Referencing assets in CSS

To access the `@assets` alias from CSS, you have to use the `~` prefix:

```css
background-image: url('~@assets/images/logo.png');
```

### Referencing assets in HTML

The `~` prefix is also necessary in HTML:

```html
<img src="~@assets/images/logo.png" alt="Logo">
```

## Tests

To run _all_ the tests:

```sh
yarn test
```

### Unit tests

```sh
yarn unit # Run all tests once
yarn unit:watch # Run tests and then
```

Unit tests are first-class citizens, meaning they live alongside our source code files. For example, to create unit tests for a file called, `foo.js`, you would create a file next to it called `foo.unit.js`.

#### Jest

We use Jest for our tests, which uses a Behavior-Driven Development (BDD) syntax that looks like this:

```js
describe('thing you want to test', () => {
  it('what you expect it to do', () => {
    // ... Setup ...
    expect(...).toEqual(...)
  })
})
```

As for the assertions you can make, expecting a variable or property to have a specific value is just the tip of the iceberg. It's a good idea to skim [the Jest docs](https://facebook.github.io/jest/docs/en/using-matchers.html) for a more complete picture of the syntax.

#### vue-test-utils

To make it easier to test Vue components, we use Vue Test Utils. Check out [the API docs](https://vue-test-utils.vuejs.org/en/api/) and existing examples for details.

#### VS Code integration

Through a recommended extension in `.vscode/extensions.json`, VS Code users can automatically be notified in their editor of failing unit tests.

### End-to-end tests

```sh
# Run the app in dev mode, alongside a graphical
# interface for your end-to-end tests, so that you
# can write and track tests as you develop.
yarn dev

# Run all end-to-end tests in headless mode, on a
# production build of your app.
yarn e2e
```

End-to-end tests are first-class citizens. Whenever we launch our app for development, a graphical interface for the end-to-end tests runs alongside them. That means tests are no longer an afterthought. If you break something, you know immediately. And instead of slowing down development, Cypress provides you with tools to speed up development and more quickly debug.

#### Cypress

We use [Cypress](https://www.cypress.io/) for our end to end tests. If you've never used it before, don't worry. There's not too steep of a learning curve. It uses a BDD syntax [inherited from Chai](https://docs.cypress.io/guides/references/assertions.html#Chai). See the documentation on [assertions](https://docs.cypress.io/guides/references/assertions.html) and [commands](https://docs.cypress.io/api/introduction/api.html) for examples of the kinds of tests you can write. This [kitchen sink spec](https://github.com/cypress-io/cypress-example-kitchensink/blob/master/cypress/integration/example_spec.js) also provides a lot of complete examples for a wide range of testing use cases, including mocking endpoints, creating fixtures, and testing responsive layouts.
