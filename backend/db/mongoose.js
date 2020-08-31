const mongoose = require('mongoose');
const db_url='mongodb://127.0.0.1:27017/TaskManager'; 

mongoose.Promise = global.Promise;
mongoose.connect(db_url, { useNewUrlParser: true,
                           useUnifiedTopology:true,
                           useCreateIndex:true,
                           useFindAndModify:false
                         }
                 ).then(() => {
                                console.log("Connected to MongoDB successfully :)");
                                }).catch((e) => {
                                                    console.log("Error while attempting to connect to MongoDB");
                                                    console.log(e);                 
                                                }
                                        );

// To prevent deprectation warnings (from MongoDB native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};