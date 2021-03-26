const seedData = require("./data.json");
const Artist = require("../models/Artist")

Artist.deleteMany({})
  .then(() => {
    return Artist.insertMany(seedData);
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });

