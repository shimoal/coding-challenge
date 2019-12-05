const express = require("express");
const app = express();
const query = require("./db/queries.js");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

//** HTTP requests to database **//
app.get('/api/links', query.findAllLinks)
app.post('/api/links', query.createLink)
app.put('/api/link/:linkId', query.updateLink)
app.delete('/api/link/:linkId', query.deleteLink)

if (process.env.NODE_ENV === "production") {
	// serve production assests
	app.use(express.static("referral-app/build"));
	// serve html file if non specified route
	const path = require("path");
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "referral-app", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('listening on port', PORT)
});
