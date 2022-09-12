import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

export async function getStaticProps() {
  const uri = "mongodb+srv://m001-student:fFL0o1hKf7qHsfXp@sandbox.ukfkzxi.mongodb.net/meetups?retryWrites=true&w=majority";
  const client = new MongoClient(uri);
  await client.connect();
  const collection = client.db().collection("meetup");
  const meetups = await collection.find().toArray();
  await client.close();
  return {
    props: {
      meetups: meetups.map(({ _id, image, title, address }) => ({
        id: _id.toString(),
        image,
        title,
        address
      }))
    },
    revalidate: 10, // Number of seconds of cycle after which this page should be pre-rendered on server-side after deploying
  }
}
