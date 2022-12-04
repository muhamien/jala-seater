import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";
import useSWR from "swr";
import moment from "moment/moment";
import axios from "axios";
import MenuSection from "../components/sections/MenuSection";
import DeskMap from "../components/sections/DeskMap";
import Layout from "../components/Layout";

export default function Home() {
  return(
    <>
      <Layout>
        <MenuSection/>
        <DeskMap/>
      </Layout>
    </>
  );
}
