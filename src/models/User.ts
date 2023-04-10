import mongoose from "mongoose";
const { Schema } = mongoose

interface UserInterface{
    name: string
}

class User{
    public model: mongoose.Model<UserInterface | undefined>;

    constructor() {
        const schema = new Schema({
            name: String
        })
        this.model = mongoose.models.User || mongoose.model('User', schema);
    }
}

export default User;