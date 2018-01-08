'use strict';

const compiler = require('./lib/compiler');

module.exports = function (config) {
  const mailer = require('./lib/mailer')(config);

  /**
   * @param {string} relativeTemplatePath is the path relative to the views directory, so include subDirectories if necessary
   * @param {object} data is the data that will be injected into the template
   * @param {string} sender Name of the sender of the email
   * @param {string} fromAddress Address from which the email is sent
   * @param {string} toAddress Address to which the email is sent
   * @param {string} subject Email Subject
   * @param {function} next Callback function with response result
   */
  function sendEmail (relativeTemplatePath, data, sender, fromAddress, toAddress, subject, next) {
    compiler.compile(relativeTemplatePath, data, (err, html) => {
      if (err) return next(err);
      mailer.sendMail(sender, fromAddress, toAddress, subject, html, (err, info) => {
        if (err) return next(err);
        next(null, info);
      });
    });
  }

  return {
    sendEmail
  };
};
