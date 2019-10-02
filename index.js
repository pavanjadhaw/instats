'use strict';
const express = require('express');
const getStats = require('./util/getStats');

const app = express();

const port = process.env.PORT || 3000;

app.get('/:username', async (req, res) => {
  const { username } = req.params;
  const stats = await getStats(username);

  if (!stats) {
    return res
      .status(404)
      .send(
        "Don't worry you definitely typed the correct URL, it's the keyboard's fault."
      );
  }

  res.send(stats);
});

app.listen(port, () => console.log(`App listening on port ${port}`));
