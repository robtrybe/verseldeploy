import { NextApiRequest, NextApiResponse } from "next";

import Connection from "@/models/Connection";

Connection.getInstance().then(() => console.log('conectado com sussesso'))
.catch(() => console.log('Problema ao se conectar'));

import User from "@/models/User";

export default async function Mongo(req: NextApiRequest, res: NextApiResponse){
    const userModel = new User();
    const result = await userModel.model.create({ name: 'Robson'})
    res.status(200).json(result);
}