const mongoose = require("mongoose");

module.exports = async () => {
    const mongoUri =
        "mongodb+srv://dineshsai463:dinesh@cluster0.njkjj4s.mongodb.net/test";

    try {
        const connect = await mongoose.connect(mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};