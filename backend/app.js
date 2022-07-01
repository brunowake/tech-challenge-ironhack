const express = require("express");
const cors = require("cors");
const phones = require('./data/phone')

const app = express()

app.use(express.json())

app.use(cors({ origin: '*' }));

app.get('/phones', (req, res) => {
    res.send(phones)
})
app.get('/phones/:id', (req, res) => {
    const { id } = req.params

    const foundedPhone = phones.find(phone => phone.id.toString() === id.toString())
    if (foundedPhone) {
        res.status(200).json(foundedPhone)
    }
    res.status(404).json({ msg: "phone not found" })
})

app.listen(4000, () => {
    console.log(`Serve listening on port ${4000}`)
})