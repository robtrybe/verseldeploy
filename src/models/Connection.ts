import mongoose from "mongoose";

const MONGO_URL = process.env.MONGO_DB as string

class Connection {
    private static connection:typeof mongoose;
    
    static async getInstance(){
        if(!Connection.connection) {
            Connection.connection = await mongoose.connect(MONGO_URL);
        }

        return Connection.connection;
    }
}

export default Connection;