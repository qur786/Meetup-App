import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetup() {
    const onAddMeetup = (newMeetup) => {
        console.log(newMeetup);
    }
    return (
        <NewMeetupForm onAddMeetup={onAddMeetup} />
    )
}