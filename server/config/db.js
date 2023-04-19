const mongoose = require('mongoose');
MongoDB_Url = "mongodb://localhost:27017/meanstack";
const mongoDB_Url = process.env.MongoDB_Url;

//connect the mongoose
mongoose.connect(mongoDB_Url);
mongoose.connection.on('connected', () => {
    console.log('<---- mongoDB connected ---->');
});
mongoose.connection.on('error', (err) => {
    console.log('====================================');
    console.log(err);
    console.log('====================================');
}); 