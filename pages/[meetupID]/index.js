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

export function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    meetupID: "1",
                }
            },
            {
                params: {
                    meetupID: "2",
                }
            }
        ],
        fallback: false
    }
}

export function getStaticProps(context) {
    const meetupID = context.params.meetupID;
    return {
        props: {
            meetup: {
                id: meetupID,
                title: "Youtube fan fest",
                image: "https://lh3.googleusercontent.com/xEGG6LDaFxBbQiwjTyQRQl2GZNATSLve0H62FDgIP6BMBUZSCVMN2feB-LnhM9y53eo7ZS4EjGcW5WhV2JMWW7MJ3bAdafJDI7FkSw=s1200",
                description: "Youtube fan fest",
                address: "Mumbai, India"
            }
        }
    }
}