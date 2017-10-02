const express = require('express');

const app = express();

app.get('/', (req, res) => {
  let name = (req.query.name || 'world');
  name = name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();

  res.status(200)
    .json({
      greeting: `Hello, ${name}!`,
    })
});

let port = process.env.HTTP_PORT || 3000;
app.listen(port, () => {
  console.log(`Express Sample running at http://127.0.0.1:${port}/`);
});
