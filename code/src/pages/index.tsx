import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import Button, { ButtonType } from "../../ACE/Button/Button";
import Input from "../../ACE/Input/Input";
import { Navbar } from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pickup LLC</title>
        <script
          defer
          data-domain="joinpickup.com"
          src="https://analytics.joinpickup.com/js/script.js"
        ></script>
        <meta property="og:title" content="Pickup LLC"/>
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://joinpickup.com/pickup-logo-v2.png"/>
        <meta property="og:url" content="https://joinpickup.com"/>
        <meta name="description" content="Community like you've never seen before." />
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
  // state
  const [email, setEmail] = useState("");

  // router
  const router = useRouter();

  return (
    <main className="m-4 flex flex-col items-center space-y-4 p-4">
      <div className="mt-12 flex flex-col space-y-4 md:w-128">
        <div className="text-5xl md:text-6xl">
          Community like you{"'"}ve never seen before.
        </div>
        <div className="text-lg text-gray-400">
          We{"'"}ve lost touch to our local communities.{" "}
          <span
            className="cursor-pointer text-orange-400 hover:underline"
            onClick={() => {
              router.push("/apps/platform");
            }}
          >
            Pickup Platform
          </span>{" "}
          is the solution.
        </div>
        {/* <div className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <div className="flex-2">
            <Input
              placeholder="Enter your email..."
              type="email"
              value={email}
              change={setEmail}
            />
          </div>
          <div className="flex-2">
            <Button type={ButtonType.CONTAINED} click={() => {}}>
              <div>Join The Waitlist</div>
            </Button>
          </div>
        </div> */}
      </div>
    </main>
  );
}
