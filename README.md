# Photo posts

Photo posts is a React application built using Vite.js. This is a widget shows the table with photos with infinite scrolling

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository
2. Install dependencies by running `npm install`
3. Start the development server by running `npm run dev`

The application should now be running on http://localhost:5173.

## Decisions and resulting solution

- For increasing performance was implemented infinite scrolling, to show photos partly and not fetch and show all 5000 photos at once
- All business logic moved out from components to keep them simple
- was decided not to use any additional libraries(except for axios(axios<3)), to keep bundle size smaller and other benefits::
- **Faster Load Times:** By minimizing dependencies, we ensure that our application loads quickly and provides a snappy user experience.

- **Reduced Bandwidth:** A smaller bundle size means less data is transferred over the network when users access our application, which can be important for users with limited bandwidth.

- **Simplified Maintenance:** With fewer dependencies, our codebase remains simple and easier to maintain. We can also minimize potential conflicts or issues that might arise when updating libraries.

- **Enhanced Security:** Minimizing dependencies helps reduce the risk of security vulnerabilities that may be present in third-party libraries.

## Technologies Used

- [Reactjs](https://react.dev/)
- [Vite.js](https://vitejs.dev/)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

The page will reload if you make edits.

## Contact

If you have any questions or feedback, please contact maintainer by email glibkorniienko92@gmail.com
