const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

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
