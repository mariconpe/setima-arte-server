import mongoose from "mongoose";

mongoose.connect("mongodb+srv://mariconpe:5w5VSttXX0yvUChR@movies.lgzneje.mongodb.net/?retryWrites=true&w=majority");

let db = mongoose.connection;

export default db;