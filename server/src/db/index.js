/* Mongo Database
* - this is where we set up our connection to the mongo database
*/
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongoUri = process.env.MONGO_URI || "mongodb://db:27017/db";

// if (process.env.MONGO_URI) {
// 	mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
// }
mongoose.connect(mongoUri, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', err => {
	console.log(`There was an error connecting to the database: ${err}`);
});

db.once('open', () => {
	console.log(`You have successfully connected to your mongo database: ${mongoUri}`);
});

module.exports = db;