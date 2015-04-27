# es6-test-runner

[![Build Status](https://secure.travis-ci.org/angus-c/es6-test-runner.png?branch=master)](http://travis-ci.org/angus-c/es6-test-runner)

`es6-test-runner` is a boilerplate for testing your es6 app using mocha and chai over karma runner. It uses webpack to preprocess your application code and babel to transpile to es5.

Use it as a blueprint for your module. The `npm prepublish` step will transpile your module to es5 and place it in the `lib` directory for public consumption.

## Naming Conventions

Tests are expected to end in `.spec.js` and live in the tests directory.

##Installation

```
npm install es6-test-runner
```

However this will export an empty `lib/index.js` file. To test your code, fork this repo and add your testable JavaScript to the `src` directory.

##Testing

```
npm test
```

##Contributions

Yes please!







