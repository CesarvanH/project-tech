const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

mongoose.connect(process.env.DB_HOST+'+srv://'+process.env.DB_USER+':'+process.env.DB_PASS+'@fridgeditch.gi8lm.mongodb.net/Recipes?retryWrites=true&w=majority',


{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection succseful');
}).catch((error) => {
    console.log('Something whent wrong ', error);
})