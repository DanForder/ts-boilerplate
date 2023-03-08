# TS Boilerplate 🏭

This project uses [webpack.js](https://webpack.js.org/) to compile our TypeScript code.

SASS is included but your single `style.scss` file will need to be imported through TypeScript instead of linked to HTML as webpack compiles it all for us!

## Quickstart 🦧

- Install the dependencies `npm i`
- Run the live server: `npm start`, this will:
  - Run a webpack build in "watch" mode
  - Look for an `index.html` in the build folder, automatically opening it in your browser
- This will open up in your browser automatically
  - If running for the first time, you will need to refresh the page once the code has finished as the live server is faster than the compilation

## Available Scripts 📜

### `build`

Compiles your code into a build folder (runs once)

### `build:dev`

Compiles your code into a build folder (continuously watching for changes)

### `server`

Runs the live server on `index.html` and opens it up in your browser on port 3000, it will respond to changes in your `index.html` file.

### `start`

Hosts your build folder's index.html on a local server, and opens up in your default browser
