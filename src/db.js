const mongoose = require("mongoose");

mongoose.connect(process.env.MONGOURL, (err) => {
  if (err) throw err;
})
