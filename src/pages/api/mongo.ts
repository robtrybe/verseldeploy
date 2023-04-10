import { NextApiRequest, NextApiResponse } from "next";

import Connection from "@/models/Connection";

Connection.getInstance().then(() => console.log('conectado com sussesso'))
.catch(() => console.log('Problema ao se conectar'));

import User from "@/models/User";

export default async function Mongo(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({ mongo: 'ok'});
    const userModel = new User();
    await userModel.model.insertMany({ name: 'Robson'})
}