import { useSession, signIn, signOut } from "next-auth/react";
import MenuSection from "../components/sections/MenuSection";
import DeskMap from "../components/sections/DeskMap";
import Layout from "../components/Layout";
import { useRouter } from 'next/router'

export default function Home() {
  const { data: session, status } = useSession();
  const router = useRouter()
  const loading = status === "loading";

  if (loading) return (
    <>
    
    </>
  );

  if (!session) {
    router.push('/signin')
    return;
  }
  return(
    <>
      <Layout>
        <MenuSection/>
        <DeskMap/>
      </Layout>
    </>
  );
}
