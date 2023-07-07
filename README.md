# Qubika 

This repository contains a Nightwatch test suite for the website of December Labs. The tests validate the functionality and behavior of the "Get in Touch" form on the website.

### Prerequisites

- Node.js (v12 or higher) should be installed on your machine.

### Configuration

1. Create a new folder and clone the repository there:

git clone https://github.com/jmanuelpat/qubika_nightwatch.git

2. Navigate to the project directory:

cd qubika_nightwatch

3. Install dependencies:

npm install

4. For test running:

npm test

When script ends, you can see an auto-generated HTML report in ./tests_output/nightwatch-html-report/index.htm

### Possible Improvements

1. **Test Coverage** Expand the test coverage: Add more test cases to cover additional scenarios, such as form validation with valid inputs, testing form submission with different data combinations, or testing error handling.

2. **CI/CD Integration** Set up the Nightwatch tests to run automatically as part of your CI/CD pipeline whenever changes are pushed to the repository.