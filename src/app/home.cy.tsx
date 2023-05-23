/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress
import Home from "./page"

describe("Renders Home", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the About page
    cy.mount(<Home />)

    // The new page should contain an h1 with "About page"
    cy.get("main").contains("Get started by editing")

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get(
      'a[href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"]'
    ).should("be.visible")
  })
})

// Prevent TypeScript from reading file as legacy script
export {}
