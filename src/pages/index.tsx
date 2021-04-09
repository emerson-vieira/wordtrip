import Head from "next/head";
import { useEffect, useState } from "react";
import { api } from "../services/api";

import { Header } from "../components/Header";
import { Slides } from "../components/Slides";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

type SlideItemProps = {
  id: number;
  image: string;
  name: string;
  summary: string;
  url: string;
};

interface ContinentsProps extends SlideItemProps {
  continents: Array<SlideItemProps>;
}

export default function Home() {
  const [continents, setContinents] = useState<ContinentsProps[]>([]);

  useEffect(() => {
    async function loadContinents() {
      api.get("/continents").then((response) => {
        setContinents(response.data);
      });
    }

    loadContinents();
  }, []);

  return (
    <>
      <Head>
        <title>Wordtrip | Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Slides continents={continents} />
    </>
  );
}
