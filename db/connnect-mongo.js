import { MongoClient } from "mongodb";

export async function connectionToMeetup() {
    const uri = process.env.mongodb;
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db().collection("meetup");
    return { collection, client };
}
