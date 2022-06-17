const mongoose = require('mongoose');

const mongoConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err, res) => {
    if (!err) {
      console.log('---- MONGODB IS CONNECTED ----')
    }
    else {
      console.log('---- ERROR CONEXION ----')
    }
  });
};

module.exports = mongoConnect;
