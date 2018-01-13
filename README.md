# [html-mailer](https://github.com/DavidPineda/html-mailer) &middot; [![npm version](https://badge.fury.io/js/html-mailer.svg)](https://badge.fury.io/js/html-mailer)

html-mailer is a small library that allows you to send rendered emails from HTML files with the insertion of variables within the templates to add dynamism.

## Install

```
npm install --save html-mailer
```

## Usage

The first step is to create a folder in the root of the project called **views**, within this folder the html templates, can contain sub folders.

##### Configuration and send Email

```
// Email acount to send emails
const config = {
  host: 'your_smtp_server',
  port: 465,
  secure: true,
  auth: {
    user: 'your_email_address@your_domain.com',
    pass: 'your_email_passoword'
  }
}

const htmlMailer = require('html-mailer')(config);

// variables that are entered in the template
const EMAIL_VARS = {
  x: 'info for var x',
  ...
};

const NAME = 'my mame'; // senders name
const FROM_ADDRESS = 'from_address@gmail.com'; // senders email address
const TO_ADDRESS = 'to_address@hotmail.com'; // receiver email address
const SUBJECT = 'test'; // subject of email
const RELATIVE_TEMPLATE_PATH = 'emails/contact'; // relative path of the html file with the content of the email

// Send email
htmlMailer.sendEmail(RELATIVE_TEMPLATE_PATH, EMAIL_VARS, NAME, FROM_ADDRESS, TO_ADDRESS, SUBJECT, (err, response) => {
  if (err) {
    console.log('Error sending mail', err)
  } else {
    console.log('Message sent correctly')
  }
});
```

##### Html template example

```
<!-- html template with variables embed - remember put the templates in views folder -->
<html>
  <head></head>
  <body>
    <div style="width: 80%; margin: 0 auto; text-align: center">
      <h2>My var X</h2>
      <p>#{x}</p>
    </div>
  </body>
</html>
```

### dependencies
This library currently has 3 dependencies
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [jade](https://www.npmjs.com/package/jade)
* [html2jade](https://www.npmjs.com/package/html2jade)
