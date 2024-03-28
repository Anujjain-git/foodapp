const mongoose = require('mongoose');
const mongoURL = "mongodb+srv://gofood:24681357@cluster0.txukcvm.mongodb.net/gofoodMern?retryWrites=true&w=majority"
const mongoDB = async () => {
    await mongoose.connect(mongoURL, { useNewUrlParser: true }).then(
        async () => {
            console.log("MongoDB connected")
            const fetched_data = mongoose.connection.db.collection("food_items");
            const data = await fetched_data.find({}).toArray();

            const fetched_cat = mongoose.connection.db.collection("foodCategory");
            const data2 = await fetched_cat.find({}).toArray();
            global.food_items = data;
            global.foodCategory = data2;
            // console.log(data2);
        },
        (Error) => { console.log("Error Detected" + Error) }
    )
}

module.exports = mongoDB;
