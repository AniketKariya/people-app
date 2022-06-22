const express = require("express");
require("./db")
const Person = require("./Person");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.static(__dirname + "/public"))

app.get("/people", async (req, res) => {
    const people = await Person.find()
    res.send(people)
})

app.post("/person/add", async (req, res) => {
    const person = new Person({
        name: req.body.name, 
        email: req.body.email,
        age: req.body.age
    })

    try {
        await person.save();
        res.status(200).send()
    } catch(err) {
        res.status(500).send()
    }
})

// app.put("/person/:id", (req, res) => {
// })

app.delete("/person/:id", async (req, res) => {
    try {
        const person = await Person.findOneAndDelete({
            _id: req.params.id
        })

        if(!person) {
            return res.status(404)
        }

        res.status(200).json({})
    } catch(err) {
        res.status(500).send()
        console.log(err)
    }
})

app.listen(PORT, () => {
    console.log(`serer is up and runnning on port ${PORT}`)
})