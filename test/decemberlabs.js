const contactPage = require('../pages/contactPage')

describe('Access and Validate Get in touch form', function () {
  beforeEach(function (browser) {
    browser.url('https://inhouse.decemberlabs.com/')
      .waitForElementVisible('body')
  });

  it('should display contact form and validate errors', function (browser) {

    const name = 'Juan Manuel Patiño'
    const email = 'jmp@testing.com'
    const company = 'Testing'
    const message = 'Hello'

    contactPage.openContactForm(browser)
    contactPage.validateFormElements(browser)
    contactPage.submitFormWithoutData(browser)
    contactPage.enterFormDataAndValidate(browser, name, email, company, message)
  });
});