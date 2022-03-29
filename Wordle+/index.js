const http = require("http");

const SECRET = "CIGAR"; // You can set any word as the secret answer

function myFunction(req, res) {
	console.log({req}); // You can uncomment this to see the request object
	console.log(req.url);

	const GUESS = req.url.slice(32, 37); // Write logic to parse the word which the user guessed from the URL string
	console.log(GUESS)
	const feedback = ""; // Write logic to compare the word with the secret, and generate the feedback string

	res.write(feedback);
	res.end();
}

http.createServer(myFunction).listen(8080);
