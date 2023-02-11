const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const connnectDB = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      'Database connected succesfully  at  => \n' + con.connection.host
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = connnectDB;
