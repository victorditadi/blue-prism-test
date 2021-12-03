This is a Project for BluePrism recruitment process.

# Tech Stack

## Libraries

- NextJS
- Typescript
- react-query
- styled-component
- Theme and Components

## Environment

- Git
- Prettier
- Eslint
- Commitizen
- Jest

## Host

- Vercel

## Commit

Install Commitzen globally

# How to run

First install the packages
`yarn` or `npm install`

To start the development environment
`yarn dev` or `npm run dev`

To start the production environment
`yarn build && yarn start` or `npm run build && npm run stat`

To run unit tests
`yarn test` or `npm run test`

# Back-end Changes

Instead of using JSON-SERVER, I create a tiny API inside NextJS to be the Backend. In this case, I could simplify the test deployment by just using one application and better visualization for who is looking.

# Things I could improve

- Remove all the Schedule Logic for Card to make him 100% reusable.
- Increase the theme file to have a higher standard (border radius, etc.)
- Better organize the commits (Commit per Component or Layer maybe)
- Test Helpers functions
- Improve UI - Being transparent, it's not my Strong Skill, so to have a better UI, I will probably create a FIGMA file to help visualize.
- For some reason, setQueryData for only updating one item was not working, so to continue with the test, I invalidated the whole QUERY_KEY.
- Pagination and Infinite Scroll is essential for this project. The Backend has pagination but doesn't return the current page, so to not complicated, I didn't go far, but in this case is essential, expecially in the Logs.
- Create e2e using Cypress.
- This kind of page architecture (two scrolls side-by-side) it's a not good experience for mobile devices, so in this case, I willed to talk with the UX/UI to create a new experience for mobile devices instead of being responsive
- Create .env files for BE URLs and other variables.
- 100% covered tests.

# Architecture

I follow a very familiar architecture I have designed in Grupo Globo streaming products.

![alt text](https://i.imgur.com/bUguegZ.png)

**Pages:**
Because I'm using NextJS, the pages folder is where NextJS makes the routing. It is responsible also for connecting the data layer with the presentation layer.

**Data Layer:** Layer responsible for granted data or states.

- **Query Hook:** Simple Hook, which will deliver Data and state about the request. (isLoading, isError)
- **Store:** Using react-query, I have the services responsible for the request and the context where we save the data for queries.
- **External:** All implementation with external products, since API or Analytics.

**Presentation Layer:** Layer responsible for all the UI.

- **Template:** Responsible for the "business" render logic for each page.
- **Component:** Simple UI components.
