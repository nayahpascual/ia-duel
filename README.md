# Compare IAs web app

A user-friendly web app to compare different IAs engines
Created by Nayah Pascual Espinosa.

## Features

- User input of ChatGpt API key and query
- Queries both Chat GPT3.5 and Chat GPT4 engines
- Presents different answers from the engines
- Allows users to choose their preferred answer
- Displays a chart with statistics based on user votes

## Scripts

- `dev`/`start` - start dev server and open browser
- `build` - build for production
- `preview` - locally preview production build
- `test` - launch test runner

## Technologies used

- [React](https://github.com/facebook/create-react-app/tree/main/packages/cra-template)
- [Redux-Toolkit](https://redux-toolkit.js.org/)
- [Vite](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react)
- [Vitest](https://github.com/vitest-dev/vitest/tree/main/examples/react-testing-lib)
- [Sass](https://sass-lang.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)

## Other npm packages used

- [react-chartjs-2](https://react-chartjs-2.js.org/)
- [react-toastify](https://www.npmjs.com/package/react-toastify)

## Prerequisites

To run this project locally, you need to have Node.js and npm (Node Package Manager) installed on your machine.
At the moment this project uses a [crudcrud](https://crudcrud.com) test backend to store the user votes. You should set it up in the utils/api/setup.ts file.

## Getting Started

1. Clone this repository:

   ```bash
   git clone [this GIT repository url]
   ```

2. Install the dependencies:

   ```bash
   cd chatgpt-demo
   npm install
   ```

3. Set up the project
   At the moment this project uses a [crudcrud](https://crudcrud.com) test backend to store the user votes.
   You should set it up your endpoint in the utils/api/setup.ts file.

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and visit http://localhost:3000 to view the app.

## Future improvements

- Add more APIs engines like Bard
- Better UI to make the comparison
- Create Node.js back-end that process the user reviews properly

## Contributing

We welcome contributions to improve our project! If you have any ideas for future improvements, please create a new issue and provide a detailed description of your suggestion. We appreciate your input!
