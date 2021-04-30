const mongoose = require('mongoose');

async function connect(){
    try {
        // await mongoose.connect('mongodb://127.0.0.1:27017/w-fashion', {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        //     useFindAndModify: false,
        //     useCreateIndex: true,
        // });
        await mongoose.connect('mongodb+srv://a2xvodoi:a16112000@w-fashion.4zu1x.mongodb.net/w-fashion?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('connect successfully!');
    } catch (error) {
        console.log('connect falure!');
    }
};

module.exports = {connect};