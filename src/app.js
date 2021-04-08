const express = require('express');
require('./config/dotenv')();
require('./config/sequelize');
const app = express();
const port = process.env.PORT;
const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
    