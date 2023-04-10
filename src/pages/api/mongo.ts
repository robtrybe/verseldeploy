import { NextApiRequest, NextApiResponse } from "next";
import User from "@/models/User";

import Connection from "@/models/Connection";

Connection.getInstance().then(() => console.log('conectado com sussesso'))
.catch(() => console.log('Problema ao se conectar'));



async function insert(_req: NextApiRequest, res:NextApiResponse) {


    const userModel = new User();
    const result = await userModel.model.create({ name: 'Robson'})
    res.status(200).json(result);
}

export default async function Mongo(req: NextApiRequest, res: NextApiResponse){
    if (req.method === 'POST') {
        insert(req, res);
    }else{
        res.status(405).json({ message: 'Method not allowed'})
    }
}
