'use strict';

const jade = require('jade');
const html2jade = require('html2jade');
const fs = require('fs');

/**
 * @param {string} relativeTemplatePath is the path relative to the views directory, so include subDirectories if necessary
 * @param {object} data is the data that will be injected into the template
 */
exports.compile = function (relativeTemplatePath, data, next) {
  // actual path where the template lives on the file system, assumes the standard /views directory
  let absoluteTemplatePath = `${process.cwd()}/views/${relativeTemplatePath}.html`;

  fs.readFile(absoluteTemplatePath, (err, file) => {
    if (err) return next(`Problem reading template, check relative template path: ${relativeTemplatePath}`);
    html2jade.convertHtml(file, {}, (err, jadeTemplate) => {
      if (err) return next(`Problem convert template to jade, check relative template path: ${relativeTemplatePath}`);
      jade.render(jadeTemplate, data, (err, compiledTemplate) => {
        if (err) return next(`Problem compiling template, check relative template path: ${relativeTemplatePath}`);
        next(null, compiledTemplate);
      });
    });
  });
};
