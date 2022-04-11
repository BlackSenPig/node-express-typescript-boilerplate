# node-typescript-boilerplate

[![TypeScript version][ts-badge]][typescript-4-6]
[![Node.js version][nodejs-badge]][nodejs]
[![APLv2][license-badge]][license]

👩🏻‍💻 Developer Ready: A comprehensive template. Works out of the box for most [Node.js][nodejs] projects.

🏃🏽 Instant Value: All basic tools included and configured:

- nodemon
- express
- dotenv
- cors
- mongoose
- swagger
- tsoa
- docker
- validator
- helmet
- husky
- [TypeScript][typescript] [4.6][typescript-4-6]
- [ESLint][eslint] with some initial rules recommendation
- [Jest][jest] for fast unit testing and code coverage
- Type definitions for Node.js and Jest
- [Prettier][prettier] to enforce consistent code style
- NPM [scripts](#available-scripts) for common operations
- Simple example of TypeScript code and unit test
- .editorconfig for consistent file format
- Reproducible environments thanks to [Volta][volta]
- Example configuration for [GitHub Actions][gh-actions]

🤲 Free as in speech: available under the APLv2 license.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Project Structure

```sh
public              # swagger-ui-express tsoa
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--models\         # Mongoose models (data layer)
 |--routes\         # Swagger tsoa routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--index.js        # App entry point
```

## Available Scripts

- `start`
- `dev`
- `clean` - remove coverage data, Jest cache and transpiled files,
- `prebuild` - lint source files and tests before building,
- `build` - transpile TypeScript to ES6,
- `build:watch` - interactive watch mode to automatically transpile source files,
- `swagger`
- `swagger route`
- `lint` - lint source files and tests,
- `docker:dev`
- `test` - run tests,
- `test:watch` - interactive watch mode to automatically re-run tests

## Additional Informations

[Ref]: https://github.com/jsynowiec/node-typescript-boilerplate
## License

[ts-badge]: https://img.shields.io/badge/TypeScript-4.6-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[nodejs]: https://nodejs.org/dist/latest-v14.x/docs/api/
[typescript]: https://www.typescriptlang.org/
[typescript-4-6]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-6/
[license-badge]: https://img.shields.io/badge/license-APLv2-blue.svg
[license]: https://github.com/BlackSenPig/node-express-typescript-boilerplate/blob/main/LICENSE
[jest]: https://facebook.github.io/jest/
[eslint]: https://github.com/eslint/eslint
[prettier]: https://prettier.io
[volta]: https://volta.sh
[volta-getting-started]: https://docs.volta.sh/guide/getting-started
[gh-actions]: https://github.com/features/actions
[esm]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
[dynamic-import]: https://v8.dev/features/dynamic-import
