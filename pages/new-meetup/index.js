import { useRouter } from "next/router";
import Head from "next/head";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    const router = useRouter();
    const onAddMeetup = (newMeetup) => {
        fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(newMeetup),
            headers: {
                "content-type": "application/json"
            }
        }).then(() => {
            router.push("/")
        })
    }
    return (
        <>
            <Head>
                <title>Add new meetup</title>
                <meta name="description" content="Add new meetup" />
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetup} />
        </>
    )
}