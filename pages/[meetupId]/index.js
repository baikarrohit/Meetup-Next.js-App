import MeetupDetails from "../../components/meetups/MeetupDetails";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetails
      image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg"
      title="A first meetup."
      address="KT2/108, ghatkopar, mumbai-400023, India"
      description="This is a first meetup."
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
      {
        params: {
          meetupId: "m3",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  //fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
        id: meetupId,
        title: "A first meetup.",
        address: "KT2/108, ghatkopar, mumbai-400023, India",
        description: "This is a first meetup.",
      },
    },
  };
};
export default MeetupDetailsPage;
