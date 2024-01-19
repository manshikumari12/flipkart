const mongoose = require("mongoose")

const connection = mongoose.connect("mongodb+srv://manshisbp:manshi@cluster0.amd0vut.mongodb.net/kart?retryWrites=true&w=majority")

module.exports = {connection}