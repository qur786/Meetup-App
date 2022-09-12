import { MongoClient, ServerApiVersion } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body;
        const uri = "mongodb+srv:\/\/m001-student:m001-student@sandbox.ukfkzxi.mongodb.net/?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        await client.connect();
        const collection = client.db("meet-ups").collection("meet-up");
        collection.insertOne(data);
        client.close();
        res.status(201).json({ message: "Meetup inserted." });
    }
}