import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    image: "https://lh3.googleusercontent.com/xEGG6LDaFxBbQiwjTyQRQl2GZNATSLve0H62FDgIP6BMBUZSCVMN2feB-LnhM9y53eo7ZS4EjGcW5WhV2JMWW7MJ3bAdafJDI7FkSw=s1200",
    title: "Youtube fan fest",
    address: "Mumbai, India"
  },
  {
    id: "2",
    image: "https://lh3.googleusercontent.com/xEGG6LDaFxBbQiwjTyQRQl2GZNATSLve0H62FDgIP6BMBUZSCVMN2feB-LnhM9y53eo7ZS4EjGcW5WhV2JMWW7MJ3bAdafJDI7FkSw=s1200",
    title: "Youtube fan fest",
    address: "Mumbai, India"
  }
]

export default function HomePage(props) {
  return (
    <MeetupList meetups={props.meetups} />
  );
}

export function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    }
  }
}
