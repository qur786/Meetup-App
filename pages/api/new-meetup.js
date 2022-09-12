import { connectionToMeetup } from "../../db/connnect-mongo";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const { collection, client } = await connectionToMeetup();
        await collection.insertOne(data);
        await client.close();
        res.status(201).json({ message: "Meetup inserted." });
    }
}