const express = require('express');
const app = express();
const cors = require('cors');
const artistController = require('./controllers/artists');
const userCtrl = require('./controllers/users');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//------------Start Controllers-------------------------------
app.use('/artists', artistController);

app.use('/', userCtrl);

//-------------End Controllers---------------------------------

const port = process.env.PORT || 4000;

app.listen(port, () => {
	console.log(`app listening on port ${port}`);
});
