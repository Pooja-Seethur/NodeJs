/**
 * connect to db
 */

const mongoose = require('mongoose');

module.exports.connect = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://developer:6omO0EHyOc42U1Ow@apigateway0.lg5at1o.mongodb.net/sample_airbnb'
    );
  } catch (err) {
    console.log(err);
  }
};
