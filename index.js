const axios = require('axios');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const endpoint = 'https://material.io/tools/icons/static/data.json'

app.use(cors())

app.get('/', async (req, res) => {
  const dataRes = await axios.get(endpoint);

  res.send(dataRes.data);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))