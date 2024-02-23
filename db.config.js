const  mongoose  = require("mongoose")

db={};
db.mongoose=mongoose;
db.url='mongodb://127.0.0.1:27017/OxyLiteDB';

db.mongoose.connect(db.url)
.then(()=>{
    console.log("database connect successfully...");
})
.catch(()=>{
  console.log("database not connected..")
});
