import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";


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
  //fetch data from an API

  const client = await MongoClient.connect(
    "mongodb+srv://rohit-baikar:6AU7hvupEsw690VF@cluster0.qhq7jea.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupCollections = db.collection("meetups");
  const result = await meetupCollections.find().toArray();
  
  client.close();

  return {
    props: {
      meetups: result.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};
export default HomePage;
