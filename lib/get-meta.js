'use strict';
const scrape = require('html-metadata');
const { promisify } = require('util');

const scrapeAsync = promisify(scrape);

const getMeta = async url => {
  try {
    const metadata = await scrapeAsync(url);
    return metadata;
  } catch (error) {
    console.log(`user not found`);
  }
};

module.exports = getMeta;
