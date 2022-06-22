const mongoose = require("mongoose")

const personSchema = new mongoose.Schema({
    name: {
        type: String,
		required: true,
		trim: true,
    },
    email: {
        type: String,
		required: true,
		trim: true,
    },
    age: {
        type: Number,
		required: true,
        default: 0,
        validate(value) {
			if (value < 0) {
				throw new Error("Age must be a positive number");
			}
		},
    }
})

const Person = mongoose.model("person", personSchema, "People");

module.exports = Person;