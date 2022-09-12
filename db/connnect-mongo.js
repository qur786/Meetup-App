import { MongoClient } from "mongodb";

export async function connectionToMeetup() {
    const uri = "mongodb+srv://m001-student:fFL0o1hKf7qHsfXp@sandbox.ukfkzxi.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db().collection("meetup");
    return { collection, client };
}
