import Head from "next/head";
import Image from "next/image";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";
import Layout from "../Components/Layout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Bilal Asghar WebDev</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Layout />
      {/* <Main /> */}
    </div>
  );
}
