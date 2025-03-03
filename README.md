# QA ADP Test Repository
This repository contains automated tests for the QA position. The tests are written using Playwright.
## Prerequisites
- Node.js (version LTS 20.16.0 or higher)
- npm (Node Package Manager)

## Installation
1. **Clone the repository:**
  ```sh
   git clone https://github.com/painttw07/adp.git
   ```

   ```
   cd adp
   ```

1. **Install dependencies:**
   ```sh
    npm install
   ```

1. **Install playwright dependencies:**
   ```sh
    npx playwright install chromium
   ```

## Running Tests
### Headless Mode

To run the tests in headless mode (without opening a browser window), use the following command:

```
npm run test:headless
```

### Browser Mode

To run the tests with the browser window open, use the following command:

```
npm run test:headed
```

### Useful Information

- Test Configuration:
  The Playwright configuration file playwright.config.ts contains settings for test execution, including browser options, timeout settings, and test directory.

- Test Reports:
  After running the tests, you can view the test report generated by Playwright. The default location for the report is playwright-report. To open the report, use:

```
npm run show-report
```

- Debugging Tests:
  If you need to debug tests, you can run them in debug mode, which pauses the test execution and opens the browser for inspection:

```
npm run test:debug
```

- Writing Tests:
  Tests are located in the test-cases directory. Each test file should follow the pattern \*.spec.ts.
