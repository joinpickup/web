import type { NextPage } from "next";
import Head from "next/head";
import Button, { ButtonType } from "../../ACE/Button/Button";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pickup</title>
        <script
          defer
          data-domain="joinpickup.com"
          src="https://analytics.joinpickup.com/js/script.js"
        ></script>
        <meta name="description" content="Landing page for pickup" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <MainContent />
    </>
  );
}

function MainContent() {
  return <main className="m-4 flex min-h-screen flex-col space-y-4 p-4"></main>;
}
