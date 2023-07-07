import Head from "next/head";
import { Navbar } from "../components/navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pickup, LLC</title>
        <meta property="og:title" content="Pickup, LLC" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://joinpickup.com/pickup-logo-v2.png"
        />
        <meta property="og:url" content="https://joinpickup.com" />
        <meta name="description" content="A better community" />
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
    <main className="w-full h-full flex flex-col">
      {/* <div className="h-20"></div> */}
      <motion.div
        className="m-4 md:mx-20 p-8 rounded-xl bg-orange-200 text-[#333333] shadow-lg space-y-2 flex flex-col items-start"
      >
        <div className="flex md:flex-row flex-col">
          <div className="order-2 md:order-1 flex flex-col space-y-2">
            <div className="text-4xl md:text-5xl">Community Put First</div>
            <div className="text-base md:text-lg">
              At Pickup LLC we are dedicated to supporting local communities. 
              Whether through building software, creating resources or sponsoring local events, 
              we hope to provide opportunitites for people to make lasting meaningful connections.
            </div>
          </div>

        </div>
          <motion.a 
            whileTap={{ scale: 0.9 }}
            whileHover={{scale: 1.2}}
              className="
              order-3
              p-4
              justify-center
              shadow-lg
              flex 
              cursor-pointer 
              items-center 
              text-md text-gray-800 rounded-full bg-orange-400
              "
              href="/collective/events"
            >
              <div>Upcoming Events</div>
          </motion.a>
      </motion.div>
    </main>


  );
}
