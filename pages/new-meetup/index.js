import { useRouter } from "next/router";
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
        <NewMeetupForm onAddMeetup={onAddMeetup} />
    )
}