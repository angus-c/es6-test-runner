# es6-test-runner

`es6-test-runner` is a boilerplate for testing your es6 app using karma runner over mocha and chai. It uses webpack to build the test bundle and babel to transpile it to ES5.

Use it as a template for your es6 modules.

## Naming Conventions

Tests are expected to end in `.spec.js` and live in the `tests` directory.

##Installation

This is just a template module so you wouldn't install it from npm. However it's fully configured for you to make an npm module from your fork of the repo.

```
npm install <your fork of es6-test-runner>
```

When installed it will transpile your `src` code to es5 and drop into into `lib`. Users installing your module will import `lib.index.js`.

##Testing

```
// single run
npm test
// auto-watch
npm run testc
```








