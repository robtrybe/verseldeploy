import mongoose, { ConnectOptions } from "mongoose";

const MONGO_URL = process.env.MONGODB_URI as string

class Connection {
    private static connection:typeof mongoose;
    
    static async getInstance(){
        if(!Connection.connection) {
            Connection.connection = await mongoose.connect(MONGO_URL,
                { useNewUrlParser: true, useUnifieldTopology: true} as ConnectOptions);
        }

        return Connection.connection;
    }
}

export default Connection;