'use strict';
const scrape = require('html-metadata');
const { promisify } = require('util');

const scrapeAsync = promisify(scrape);

/**
 * Function to get metadata of given url
 *
 * @param {String} url of site to scrape and get metadata of
 * @returns {Object} metadata
 */
const getMeta = async url => {
  try {
    const metadata = await scrapeAsync(url);
    return metadata;
  } catch (error) {
    console.log(`user not found`);
  }
};

module.exports = getMeta;
