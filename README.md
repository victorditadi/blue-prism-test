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

- Amplify

## Commit

Install Commitzen globally

# Things I could improve

- Remove all the Schedule Logic for Card to make him 100% reusable.
- Increase the theme file to have a higher standard (border radius, etc.)
- Better organize the commits (Commit per Component or Layer maybe)
- Test Helpers functions
- Improve UI - Being transparency, it's not my Strong Skills, so, to have a better UI I will probably create a FIGMA file, to help visualize.
- For some reason, setQueryData for only update one item was not working, so to continue with the test I invalidate the whole QUERY_KEY.
- Pagination and Infinite Scroll is essencial for this project, but the Backend have pagination in their filter, but don't return the current page, so to not complicated, I didn't go far, but is this case is very essential expecially in the Logs.
- Create e2e using Cypress.

# Architecture

I follow a very familiar architecture that i have design in Grupo Globo streaming products.

![alt text](https://i.imgur.com/bUguegZ.png)

**Pages**:
Because i'm using NextJS, the pages folder is where NextJS makes the routing. Is responsible also for connect the data layer with presentation layer

Data Layer: Layer responsible for granted data or states.

- Query Hook: Simple Hook which will delivery Data and state about the request. (isLoading, isError)
- Store: Using react-query I have the services which is responsible for the request and the context which where we save the data for queries.
- External: All implementation with external products, since API or Analytics.

Presentation Layer: Layer responsible for all the UI.

- Template: Responsible for the "business" render logic for each page.
- Component: Simple UI components.
