import { useSession } from "next-auth/react";
import MenuSection from "../components/sections/MenuSection";
import DeskMap from "../components/sections/DeskMap";
import Layout from "../components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import LottieLoading from '../assets/lottiefile/loading.json'
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [desks, setDesks] = useState();
  const [deskA, setDeskA] = useState();
  const [deskB, setDeskB] = useState();
  const [deskC, setDeskC] = useState();
  const [deskD, setDeskD] = useState();

  // console.log('session', session)
  // console.log('props', props)
  // console.log('deskA', deskA)
  useEffect(() => {
    setDesks(props.desks);
    setDeskA(props.desks.filter((i) => (i.fields.deskName == "A")))
    setDeskB(props.desks.filter((i) => (i.fields.deskName == "B")))
    setDeskC(props.desks.filter((i) => (i.fields.deskName == "C")))
    setDeskD(props.desks.filter((i) => (i.fields.deskName == "D")))
    setLoading(false)
  }, []);

  if (!session) {
    // router.push('/api/auth/signin');
    // return;
    return <><Link href="/api/auth/signin" className="bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded">Login</Link></>;
  } else if (loading) {
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
  } else {
    return (
      <>
        <Layout>
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
}
