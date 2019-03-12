# GraphQL-Basics

1. npm init
2. npm install `babel-cli` `babel-preset-env` 
`babel-cli` allows us to run a command to compile Babel.
`babel-preset-env` to tell babel exactly what it should change
3. create a `.babelrc` file under the main folder and it configs how babel works
    ```json
    {
      "presets": [
        "env"
      ]
    }

    ```
4. create an entry root file `index.js` under the `src` folder where is under the main folder
5. create a `start` command in the `scripts` tag of `package.json` file.
    ```json
    "scripts": {
      "start": "bable-node src/index.js",
    }
    ```
    
    `bable-node` is what we are going to end up using for local development purposes only.
6.  npm run start

# GraphQL-Api
1. npm i graphql-yoga@1.14.10
2. `import` { GraphQLServer } `form` 'graphql-yoga' on `index.js`
3. 2 important concepts
    - Type defininitions(schma)
    ```javascript
    const typeDefs = `
      type Query {
        hello: String!
      }
    
    `
    // ‘!’ means must be, if not has it, can be assigned value "null"
    ```
    - Resolvers(functions that actually run when various operations are performed)
    ```javascript
    const resolvers = {
      Query: {
        hello() {
          return 'This is my query!'
        }
      }
    }
    ```
4. Declare a `server` by GraphQLServer
    ```javascript
    const server = new GraphQLServer({
      typeDef,
      resolvers
    })
    ```
5. Start the server
    ```javascript
    server.start(() => {
      console.log("The server is up")
    });
    // port 400
    ```
6. Scalar types: `String`, `Boolean`, `Int`, `Float`, `ID`