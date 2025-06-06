# QA Task Automation

## Playwright Test Automation Framework

This repository contains automated test scripts written in TypeScript using the Playwright framework.
The tests cover various functionalities of the application, including user registration, product search,
cart validation, and login/logout features.

---

## General Instructions

### Website Under Test

The tests are designed for the **Automation Exercise** website.

---

### Framework Overview

-   **Framework:** Playwright (UI & API automation)
-   **Programming Language:** TypeScript

#### Core Principles

1. **Input Data Reading:** Test data is read from external files (e.g., JSON).
2. **Page Object Model (POM):** Ensures modular and maintainable test scripts.
3. **HTML Reporting:** Generates detailed and clear test execution reports.
4. **Cross-Browser Testing:** Supports execution across various browsers (Chromium, Firefox, WebKit).
5. **Command-Line Options:** Easily run tests in headless, headed, and debug modes.

---

## Executing Tests

### Prerequisites

1. Install dependencies:

    npm install

2. Install Playwright browsers:

    npx playwright install

3. Run Playwright tests:

    npx playwright test

---

## Test Tasks

### Task 1: Validate User Registration Process

**Objective:** Test the user registration flow.

#### Steps:

1. Navigate to the website.
2. Click on the "Signup / Login" link.
3. Enter a new email address and name in the registration form.
4. Fill in all required fields in the registration form.
5. Submit the form and verify:
    - The account is created successfully.
    - A success message ("Account Created!") is displayed.
    - The user is redirected to their account dashboard.

#### Expected Output:

-   The user should be successfully registered.
-   The success message should be visible.

#### Commands to Run:

```
npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts
npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts --headed
npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts --debug
npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts --project=chromium
```

---

### Task 2: Search and Add a Product to Cart

**Objective:** Test the search functionality and cart behavior.

#### Steps:

1. Navigate to the website.
2. Use the search bar to search for a specific product (e.g., "T-shirt").
3. Verify that relevant search results are displayed.
4. Click on a product and add it to the cart.
5. Navigate to the cart page and verify:
    - The product details (e.g., name, price) match the selected product.
    - The quantity is correct.

#### Expected Output:

-   Search results should match the query.
-   The product added to the cart should match the selected product.
-   The cart details should reflect the correct product information.

#### Commands to Run:

```
npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts
npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts --headed
npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts --debug
npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts --project=chromium
```

---

### Task 3: Test Login and Logout Functionality

**Objective:** Validate the login and logout processes.

#### Steps:

1. Navigate to the website.
2. Click on the "Signup / Login" link.
3. Enter valid login credentials (use a pre-existing account).
4. Verify:
    - The user is logged in successfully.
    - The correct username is displayed.
5. Logout by clicking on the logout button.
6. Verify:
    - The user is logged out successfully.
    - The "Signup / Login" link is visible again.

#### Expected Output:

-   The user should be logged in successfully, and the username should be displayed.
-   After logging out, the user should be redirected to the homepage, and the "Signup / Login" link should reappear.

#### Commands to Run:

```
npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts
npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts --headed
npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts --debug
npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts --project=chromium
```

---

## Scripts in package.json

To simplify running tests, you can add the following scripts to your package.json:

```json
"scripts": {
  "test:all": "npx playwright test",
  "test:register": "npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts",
  "test:register:headed": "npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts --headed",
  "test:register:debug": "npx playwright test tests/automation-exercise/Registration/create_registration.spec.ts --debug",
  "test:cart": "npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts",
  "test:cart:headed": "npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts --headed",
  "test:cart:debug": "npx playwright test tests/automation-exercise/ProductSearchAndCart/search_and_add_to_cart.spec.ts --debug",
  "test:login": "npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts",
  "test:login:headed": "npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts --headed",
  "test:login:debug": "npx playwright test tests/automation-exercise/LoginLogout/login_and_logout.spec.ts --debug"
}
```

---

## Key Features

-   **Data-Driven Tests:** Test data is sourced from productTshirt.json for flexibility and scalability.
-   **Page Object Model (POM):** Modular design for better code reuse and maintainability.
-   **Cross-Browser Testing:** Easily run tests on Chromium, Firefox, and WebKit.
-   **Detailed Reports:** HTML reporting provides clear and actionable test results.
#   q a T a s k  
 