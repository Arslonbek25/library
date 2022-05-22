if (process.env.NODE_ENV !== "production") {
	require("dotenv").config();
}

const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const path = require("path");

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, () => {
	console.log("connected");
});
// const userSchema = new mongoose.Schema({
// 	name: String,
// 	age: Number,
// 	email: String,
// 	createdAt: Date,
// 	updateAt: Date,
// 	bestFriend: mongoose.SchemaTypes.ObjectId,
// 	hobbies: [String],
// 	address: { street: String, city: String },
// });
// const User = mongoose.model("User", userSchema);
// const run = async () => {
// 	const user = await User.create({ name: "Bob", age: 21 });
// 	console.log(user);
// };
// run();

// Setting up mongodb
// Require mongoose
// Connect to database using connect method which also accepts two callback functions for success and error
// Create a schema that acts like a shape for a document with necessary properties
// Use model method to create a new model of that schema which a wrapper and has methods for working with that document. It returns a class
// Can create a new document by using new operator on that class or by running its static method create. Note: in the first case saving the document is required, otherwise it'll remain only local.

// Routes
const indexRouter = require("./routes/index");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("layout", "layouts/layout.ejs");

app.use(expressLayouts);
app.use(express.static("./public"));
app.use("/", indexRouter);

app.listen(process.env.PORT || 3000);
