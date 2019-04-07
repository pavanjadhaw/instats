'use strict';
const scrape = require('html-metadata');
const { promisify } = require('util');

const scrapeAsync = promisify(scrape);

const getMeta = async username => {
  try {
    const url = 'https://www.instagram.com/' + username;
    const metadata = await scrapeAsync(url);
    return metadata;
  } catch (error) {
    console.log(`user not found`);
  }
};

module.exports = getMeta;
