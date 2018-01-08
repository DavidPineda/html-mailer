'use strict';

const nodemailer = require('nodemailer');

module.exports = function (config) {
  const transporter = nodemailer.createTransport(config);

  /**
   * @param {string} sender Name of the sender of the email
   * @param {string} fromAddress Address from which the email is sent
   * @param {string} toAddress Address to which the email is sent
   * @param {string} subject Email Subject
   * @param {string} content Email Content
   * @param {function} next Callback function with response result from nodemailer sendMail method
   */
  function sendMail (sender, fromAddress, toAddress, subject, content, next) {
    let mailOptions = {
      from: sender + ' <' + fromAddress + '>',
      to: toAddress,
      subject: subject,
      html: content
    };

    transporter.sendMail(mailOptions, (err, response) => {
      if (err) return next(`[ERROR] Message NOT sent: ${err.message}`);
      next(null, response);
    });
  }

  return {
    sendMail
  };
};
