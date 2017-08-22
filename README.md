# PRACTICO MERCADOLIBRE

### Dependencies

- [Yarn](https://yarnpkg.com)
- [Node.js v6+](https://nodejs.org)


### Getting started

- Install dependencies
    ```
    yarn install
    ```

- Running the project
    ```
    yarn run serve
    ```
    serve runs the app in development mode, to run production mode use:
    ```
    yarn run serve:prod
    ```

- Building just the client
    ```
    yarn run build
    ```
    Use this to get the compiled app in the `www` dir

### Docker

- Building the image
    ```
    docker build -t <imageTag> .
    ```

- Running a container
    ```
    docker run -p <hostPort>:3000 <imageTag>
    ```

### Code quality and stuff

- Lint
    ```
    yarn run lint
    ```

- Tests
    ```
    yarn test
    ```
    or
    ```
    yarn run test:watch
    ```


#### Pending
- [X] Unit tests
- [X] Run with Docker
- [ ] Fix HMR
- [ ] Refactor ItemsList component
- [ ] Refactor TopBar component
