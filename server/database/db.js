import mongoose from "mongoose";

const Connection = async(username, password, database) => {

const URL = `mongodb+srv://${username}:${password}@crud.ugmap.mongodb.net/${database}?retryWrites=true&w=majority`;
   try {
     await mongoose.connect(URL, {useUnifiedTopology : true, useNewUrlParser: true})
     console.log("Database connected succesfully");
   }
   catch(error) {
    console.log(`errror while connecting database ${error}`);
   }

}

export default Connection;