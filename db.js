const mongoose = require("mongoose");

const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

try {
  mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to DB");
} catch (error) {
  console.log("Could not connect to DB", error);
}

const connection = mongoose.connection;

module.exports = {
  connection,
};
