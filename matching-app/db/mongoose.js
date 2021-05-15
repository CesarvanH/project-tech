const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fridgeditch', 
{
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Connection succseful');
}).catch((error) => {
    console.log('Something whent wrong', error);
})