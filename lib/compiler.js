'use strict';

const jade = require('jade');

/**
 * @param {string} relativeTemplatePath is the path relative to the views directory, so include subDirectories if necessary
 * @param {object} data is the data that will be injected into the template
 */
exports.compile = function (relativeTemplatePath, data, next) {
  // actual path where the template lives on the file system, assumes the standard /views directory
  // output would be something like /var/www/my-website/views/email-template.jade
  let absoluteTemplatePath = process.cwd() + '/views/' + relativeTemplatePath + '.jade';

  // get our compiled template by passing path and data to jade
  jade.renderFile(absoluteTemplatePath, data, (err, compiledTemplate) => {
    if (err) return next(`Problem compiling template check relative template path: ${relativeTemplatePath}`);
    next(null, compiledTemplate);
  });
};
