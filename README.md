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
- Cypress

## Host

- Amplify

## Commit

Install Commitzen globally

# Different Things

- I have created a Tooltip for better visualization if have long text
- Instead to fetch all Records, just fetch record per schedule. I Believe is better a low loading about any schedule that have a huge loading for all records, which can have leave to several problems

# Things I could improve

- Remove all the Schedule Logic for Card to make him 100% reusable.
- Increase the theme file to have a higher standard (border radius, etc.)
- Better organize the commits (Commit per Component maybe)
- Test Helpers functions
- Improve UI - Being transparency, it's not my Strong Skills, so, to have a better UI I will probably create a FIGMA file, to help visualize a better UI.
- For some reason, setQueryData for only update one item was not working, so to continue with the test I invalidate the whole QUERY_KEY
- Pagination and Infinite Scroll is essencial for this project, but the Backend have pagination in their filter, but don't return the current page, so to not complicated, I didn't go far, but is this case is very essential to Schedule expecially in the Logs.
