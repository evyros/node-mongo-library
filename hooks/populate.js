const books = require('./books.json');
const students = require('./students.json');
const MongoClient = require('mongodb').MongoClient;
let db;

MongoClient.connect('mongodb://localhost:27017/app', {useNewUrlParser: true})
	.then((client) => {
		db = client.db('library');

		console.log('Connected to DB');
		console.log('Inserting fake data...');

		let p1 = db.collection('books').insertMany(books);
		let p2 = db.collection('students').insertMany(students);

		Promise.all([p1, p2])
			.then(() => {
				console.log("\x1b[32m", 'DONE SUCCESSFULLY!', '\x1b[0m');
				process.exit(0);
			})
			.catch((err) => console.log('ERROR: ' + err));
	})
	.catch(() => console.log('Could not connect to DB'));