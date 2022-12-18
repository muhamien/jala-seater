import { useSession, signIn, signOut } from "next-auth/react";
import MenuSection from "../components/sections/MenuSection";
import DeskMap from "../components/sections/DeskMap";
import Layout from "../components/Layout";
import { useRouter } from 'next/router'
import axios from "axios";
import { useEffect, useState } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import LottieLoading from '../assets/lottiefile/loading.json'

const fetchAllDesk = async () => {
  const { data } = await axios.get(`${process.env.BASE_URL}/api/getAllDesk`);
  return data;
}

// export async function getServerSideProps() {
//   const data = await fetchAllDesk();
//   return {
//     props: {
//       desks: data,
//     },
//   }
// }

export default function Home({ desks }) {
  // console.log(desks)
  const router = useRouter();
  const { data: session, status } = useSession();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  const [deskA, setDeskA] = useState();
  const [deskB, setDeskB] = useState();
  const [deskC, setDeskC] = useState();
  const [deskD, setDeskD] = useState();

  useEffect(() => {
    fetchAllDesk().then((res) => {
      console.log(res)
      setDeskA(res.desks.filter((i) => (i.fields.deskName == "A")))
      setDeskB(res.desks.filter((i) => (i.fields.deskName == "B")))
      setDeskC(res.desks.filter((i) => (i.fields.deskName == "C")))
      setDeskD(res.desks.filter((i) => (i.fields.deskName == "D")))
      setLoading(false);
    }).catch((err) => {
      setError(err);
      setLoading(false);
    })
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LottieLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  if (loading) return (
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

  if (!session) {
    router.push('/api/auth/signin')
    return;
  }
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
