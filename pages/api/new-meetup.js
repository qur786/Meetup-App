import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const uri = "mongodb+srv://m001-student:fFL0o1hKf7qHsfXp@sandbox.ukfkzxi.mongodb.net/meetups?retryWrites=true&w=majority";
        const client = new MongoClient(uri);
        await client.connect();
        const collection = client.db().collection("meetup");
        await collection.insertOne(data);
        await client.close();
        res.status(201).json({ message: "Meetup inserted." });
    }
}