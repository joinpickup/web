import Head from "next/head";
import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Pickup Collective</title>
        <script
          defer
          data-domain="joinpickup.com"
          src="https://analytics.joinpickup.com/js/script.js"
        ></script>
        <meta property="og:title" content="Pickup, LLC" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://joinpickup.com/pickup-logo-v2.png"
        />
        <meta property="og:url" content="https://joinpickup.com" />
        <meta name="description" content="A new kind of company." />
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
  return (
    <main className="w-full h-full flex items-center justify-center">
      {/* <div className="h-20"></div> */}
      <motion.div
        className="m-4 md:mx-20 p-8 w-full rounded-xl bg-orange-200 text-[#333333] shadow-lg flex md:flex-row flex-col md:space-x-2 space-y-2 items-center"
      >
        <div className="order-2 md:order-1 flex flex-col space-y-2">
          <div className="text-4xl md:text-5xl">A company controlled by its customers</div>
          <div className="text-base md:text-lg">
            The Pickup Collective is a company designed to put people over
            profit. Like a co-op Pickup is completely owned by the people who
            buy into the program.
          </div>
        </div>
        <div className="order-1 md:order-2">
          <img src="/img/tree.svg"></img>
        </div>
      </motion.div>
    </main>
  );
}
