import { useSession } from "next-auth/react";
import MenuSection from "../components/sections/MenuSection";
import DeskMap from "../components/sections/DeskMap";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import LottieLoading from '../assets/lottiefile/loading.json'
import Link from "next/link";

const fetchAllDesk = async () => {
  const { data } = await axios.get(`${process.env.BASE_URL}/api/getAllDesk`);
  return data;
}

export async function getServerSideProps(context) {
  const data = await fetchAllDesk();

  return {
    props: {
      desks: data,
    },
  }
}

export default function Home(props) {
  const { data: session, status } = useSession();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [desks, setDesks] = useState(props.desks);
  const [deskA, setDeskA] = useState(props.desks.filter((i) => (i.fields.deskName == "A")));
  const [deskB, setDeskB] = useState(props.desks.filter((i) => (i.fields.deskName == "B")));
  const [deskC, setDeskC] = useState(props.desks.filter((i) => (i.fields.deskName == "C")));
  const [deskD, setDeskD] = useState(props.desks.filter((i) => (i.fields.deskName == "D")));

  // console.log('session', session, status)
  // console.log('props', props)
  // setDesks(props.desks);
  // setDeskA(props.desks.filter((i) => (i.fields.deskName == "A")))
  // setDeskB(props.desks.filter((i) => (i.fields.deskName == "B")))
  // setDeskC(props.desks.filter((i) => (i.fields.deskName == "C")))
  // setDeskD(props.desks.filter((i) => (i.fields.deskName == "D")))
  // setLoading(false)
  // useEffect(() => {
  //   initialState();
  // });

  if (loading) {
    return (
      <>
        <div className="grid grid-cols-1 place-content-center h-screen">
          <Player
            src={LottieLoading}
            className="player"
            autoplay
            loop
            style={{ height: '200px', width: '200px' }}
          />
        </div>
      </>
    );
  }
  return (
    <>
      <Layout session={session} status={status}>
        <MenuSection />
        <DeskMap
          desks={desks}
          deskA={deskA}
          deskB={deskB}
          deskC={deskC}
          deskD={deskD}
        />
      </Layout>
    </>
  );
}