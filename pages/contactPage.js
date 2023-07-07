module.exports = {
    elements: {
      mobileMenuButton: '.btn_mobile',
      getInTouchButton: 'li#menu-item-846',
      nameField: '#wpforms-872-field_0',
      nameFieldError: '.wpforms-field.wpforms-field-name.wpforms-one-half.wpforms-first.wpforms-has-error',
      emailField: '#wpforms-872-field_1',
      emailFieldError: '.wpforms-field.wpforms-field-email.wpforms-one-half.wpforms-first.wpforms-has-error',
      companyField: '#wpforms-872-field_6',
      companyFieldError: '.wpforms-field.wpforms-field-text.wpforms-one-half.wpforms-first.wpforms-has-error',
      messageField: '#wpforms-872-field_2',
      messageFieldError: '.wpforms-field.wpforms-field-textarea.wpforms-one-half.wpforms-has-error',
      sendButton: '.wpforms-submit-container',
      formPopup: '.dl-modal dl-getintouch-modal big open'
    },
  
    openContactForm: function (browser) {
      browser
        .click(this.elements.mobileMenuButton)
        .waitForElementVisible(this.elements.getInTouchButton)
        .click(this.elements.getInTouchButton)
    },
  
    validateFormElements: function (browser) {
      browser
        .assert.elementPresent(this.elements.emailField)
        .assert.elementPresent(this.elements.sendButton)
    },
  
    submitFormWithoutData: function (browser) {
      browser
        .click(this.elements.sendButton)
        .waitForElementPresent(this.elements.nameFieldError)
        .waitForElementPresent(this.elements.emailFieldError)
        .waitForElementPresent(this.elements.companyFieldError)
        .waitForElementPresent(this.elements.messageFieldError)
    },
  
    enterFormDataAndValidate: function (browser, name, email, company, message) {
      browser
        .setValue(this.elements.nameField, name)
        .assert.not.elementPresent(this.elements.nameFieldError)
        .setValue(this.elements.emailField, email)
        .assert.not.elementPresent(this.elements.emailFieldError)
        .setValue(this.elements.companyField, company)
        .assert.not.elementPresent(this.elements.companyFieldError)
        .setValue(this.elements.messageField, message)
        .assert.not.elementPresent(this.elements.messageFieldError)
    },
  };