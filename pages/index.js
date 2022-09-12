import { connectionToMeetup } from "../db/connnect-mongo";
import MeetupList from "../components/meetups/MeetupList";

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

export async function getStaticProps() {
  const { collection, client } = await connectionToMeetup();
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
