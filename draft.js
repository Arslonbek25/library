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
