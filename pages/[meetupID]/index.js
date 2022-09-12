import { MongoClient, ObjectId } from "mongodb";
import MeetupDetails from "../../components/meetups/MeetupDetails";

export default function MeetupDetailsPage(props) {
    return (
        <MeetupDetails
            id={props.meetup.id}
            title={props.meetup.title}
            image={props.meetup.image}
            description={props.meetup.description}
            address={props.meetup.address}
        />
    )
}

export async function getStaticPaths() {
    const uri = "mongodb+srv://m001-student:fFL0o1hKf7qHsfXp@sandbox.ukfkzxi.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db().collection("meetup");
    const meetups = await collection.find({}, { _id: 1 }).toArray();
    await client.close();
    return {
        paths: meetups.map((meetup => ({
            params: {
                meetupID: meetup._id.toString()
            }
        }))),
        fallback: false
    }
}

export async function getStaticProps(context) {
    const meetupID = context.params.meetupID;
    const uri = "mongodb+srv://m001-student:fFL0o1hKf7qHsfXp@sandbox.ukfkzxi.mongodb.net/meetups?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
    await client.connect();
    const collection = client.db().collection("meetup");
    const { title, image, description, address, _id } = await collection.findOne({ _id: ObjectId(meetupID) });
    await client.close();
    return {
        props: {
            meetup: {
                id: _id.toString(),
                title,
                image,
                description,
                address,
            }
        }
    }
}