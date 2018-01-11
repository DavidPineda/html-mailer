# html-mailer
html-mailer is a small library that allows you to send rendered emails from HTML files with the insertion of variables within the templates to add dynamism.

## Install

```
npm install --save html-mailer
```

## Usage

```
const config = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'your_email_address@gmail.com',
    pass: 'your_email_passoword'
  }
}

const htmlMailer = require('html-mailer')(config);

// variables that are entered in the template
const emailVars = {
  name: 'name',
  email: 'email',
  subject: 'subject',
  message: 'message'
};

const NAME = 'my mame'; // senders name
const FROM_ADDRESS = 'from_address@gmail.com'; // senders email address
const TO_ADDRESS = 'to_address@hotmail.com'; // receiver email address
const SUBJECT = 'test'; // subject of email
const RELATIVE_TEMPLATE_PATH = 'emails/contact'; // relative path of the html file with the content of the email

// Send email
htmlMailer.sendEmail(RELATIVE_TEMPLATE_PATH, contact, NAME, FROM_ADDRESS, TO_ADDRESS, SUBJECT, (err, response) => {
  if (err) {
    console.log('Error sending mail', err)
  } else {
    console.log('Message sent correctly')
  }
});
```

### dependencies
This library currently has 3 dependencies
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [jade](https://www.npmjs.com/package/jade)
* [html2jade](https://www.npmjs.com/package/html2jade)
