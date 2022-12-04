import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { set, useForm } from "react-hook-form";
import useSWR from "swr";
import moment from "moment/moment";
import axios from "axios";

export default function Home() {
  return(
    <>
      <h1>Hello world</h1>
    </>
  );
}
