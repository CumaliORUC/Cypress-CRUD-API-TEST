***Cypress API Testing Framework***

This is a Cypress-based API testing framework designed to automate testing for RESTful services. 
The framework follows best practices for maintainability and reusability, including modular code, reusable commands, and detailed reporting using Mochawesome.

**Features**

*Base URL Configuration:*
The base URL is configured in cypress.config.js and can be easily updated without modifying individual test files.

*Reusable Commands:*
CRUD methods are implemented as reusable Cypress commands in the commands.js file for consistency and maintainability.

*Dynamic Pet ID:*
Random six-digit pet IDs are generated dynamically and reused across test cases.

*Error Handling:*
failOnStatusCode: false is implemented for tests where non-2xx/3xx responses are expected (e.g., 404 Not Found).

*Reporting:*
Integrated with Mochawesome for generating detailed test reports in HTML and JSON formats.
