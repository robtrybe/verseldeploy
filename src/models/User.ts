import mongoose from "mongoose";
const { Schema, model, models } = mongoose

interface UserInterface{
    name: string
}

class User{
    public model: mongoose.Model<UserInterface>;

    constructor() {
        const schema = new Schema({
            name: String
        })
        this.model = models.User || model('User', schema);
    }
}

export default User;