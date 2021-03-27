const express = require('express')
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());




const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});