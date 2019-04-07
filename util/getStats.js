'use strict';
const getMeta = require('../lib/get-meta');

const getStats = async username => {
  try {
    const url = 'https://www.instagram.com/' + username;
    const metadata = await getMeta(url);

    if (metadata) {
      const info = metadata.general.description.split(',');

      const stats = {
        followers: info[0].trim().split(' ')[0],
        following: info[1].trim().split(' ')[0],
        posts: info[2]
          .trim()
          .split('-')[0]
          .split(' ')[0],
      };
      return stats;
    }
  } catch (error) {
    console.log(`Can't get stats for given user`);
  }
};

module.exports = getStats;
