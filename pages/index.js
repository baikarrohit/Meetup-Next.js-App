import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "KT2/108, ghatkopar, mumbai-400023, India",
    description: "This is a first meetup.",
  },
  {
    id: "m2",
    title: "A second meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "KT6/306, mulund, mumbai-400023, India",
    description: "This is a second meetup.",
  },
  {
    id: "m3",
    title: "A third meetup.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "KT6/306, mulund, mumbai-400023, India",
    description: "This is a third meetup.",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

// export const getServerSideProps = (context) => {
//   const req = context.req;
//   const res = context.res;
  
//   //fetch data from an API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMMY_MEETUPS
    },
    revalidate: 1
  }
};
export default HomePage;
