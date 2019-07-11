// Loading evnironmental variables here
if (process.env.NODE_ENV !== 'production') {
	console.log('loading dev environments');
	require('dotenv').config();
}
require('dotenv').config();

const express = require('express');
const db = require('./db');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 4000;


// Middlewares
app.use(express.urlencoded({ limit: '100mb', extended: true }));
app.use(express.json({ limit: '100mb' }));

// If its production environment!
// if (process.env.NODE_ENV === 'production') {
// 	const path = require('path');
// 	app.use('/static', express.static(path.join(__dirname, '../client/build/static')));
// 	app.get('/', (req, res) => {
// 		res.sendFile(path.join(__dirname, '../client/build/'));
// 	});
// }

app.get('/getTest', (req, res) => {
	console.log("get test hit");
	res.send("getTest responsse!")
})
app.get('/getChecks', (req, res) => {
	res.send("got checks");
})

// Add routes, both API and view
app.use(routes);

// Error handler
app.use(function (err, req, res, next) {
	console.log('====== ERROR =======');
	console.error(err.stack);
	res.status(500);
});

// Starting Server
app.listen(PORT, () => {
	console.log(`🌎  ==> API Server now listening on PORT ${PORT}`);
});
