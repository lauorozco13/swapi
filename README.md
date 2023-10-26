# SWAPI Web Application

Welcome to the SWAPI web application challenge. May the force be with you! 🌌

## Objective

The developer's mission, should they choose to accept it, is to utilize the [SWAPI](https://swapi.dev/) to craft a UI with dedicated routes for each resource: people, films, starships, vehicles, species, and planets.

## Requirements:

- They should implement a **navigation system** for easily accessing different routes.
- They need to design a **list view** for each resource. This view should present documents from the API and be searchable by name.
- They should introduce a **detail view**. Items in their list should link to this view to showcase an item's complete properties.
- They must implement **local storage** to monitor the frequency with which each item is viewed (to determine the most popular items).
- They should develop a **Popular Items** section that displays items based on the local storage count of views.
- With six resources available, they should consider the creation or utilization of **reusable components** to optimize their workflow.

## Development & Setup:

### Dependencies:

To help you get started, this project has been scaffolded with several key dependencies:

- **UI & Styling**: `@emotion/react`, `@emotion/styled`, `@mui/icons-material`, `@mui/material`, and `@mui/styles`.
- **Routing**: `react-router-dom`
- **Core**: `react` and `react-dom`
- **Testing**: `@testing-library/jest-dom`, `@testing-library/react`, `@testing-library/react-hooks`, and `@testing-library/user-event`

To install the dependencies, simply run:

```bash
npm install
```

### Available Scripts:

- `npm start`: Launches the app in development mode.
- `npm build`: Builds the app for production.
- `npm test`: Runs the jest test runner.
- `npm eject`: Ejects from the `create-react-app` setup. Use with caution.
