if (process.env.NODE_ENV === "production") {
	module.exports = {
  	db: process.env.DB,
  	username: process.env.DB_USERNAME,
  	password: process.env.DB_PASSWORD,
  	host: process.env.DB_HOST,
  	port: process.env.DB_PORT
  };
} else {
	module.exports = {
  	db: "ambassador-coding-challenge",
  	username: "",
  	password: "",
  	host: "localhost",
  	port: 5432
  };
}
