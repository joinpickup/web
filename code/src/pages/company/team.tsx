import Head from "next/head";
import { Navbar } from "../../components/navbar";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Local() {
  return (
    <>
      <Head>
        <title>Local</title>
        <script
          defer
          data-domain="joinpickup.com"
          src="https://analytics.joinpickup.com/js/script.js"
        ></script>
        <meta name="description" content="The digital bulliten board" />
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
    <main className="">
      <div className="m-4 flex flex-col space-y-4 p-4">
        <div className="text-3xl">The Team</div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-x-2 md:space-y-0">
          <TeamMemberCard
            name="Andrew"
            email="acohen@joinpickup.com"
            title="CEO/CTO"
            image="/img/team/andrew-funny.png"
          />
          <TeamMemberCard
            name="Brian"
            email="bcorrell@joinpickup.com"
            title="COO/CFO"
            image="/img/team/brian.png"
          />
          <TeamMemberCard
            name="Stefanie"
            email="solivares@joinpickup.com"
            title="Co VP of Product/Media"
            image="/img/team/stef.png"
          />
          <TeamMemberCard
            name="Jason"
            email="jolivares@joinpickup.com"
            title="Co VP of Product/Media"
            image="/img/team/jason.png"
          />
        </div>
      </div>
    </main>
  );
}

function TeamMemberCard({
  image,
  title,
  name,
  email,
}: {
  image: string;
  title: string;
  name: string;
  email: string;
}) {
  return (
    <motion.div
      className="flex-col md:w-96 w-full rounded-lg bg-orange-200 space-y-2 shadow-xl"
      whileHover={{ scale: 1.02 }}
    >
      <div className="p-4  rounded-lg flex-col space-y-2">
        <img src={image} className="w-full rounded-xl"></img>
        <div className="text-2xl md:text-3xl">{name}</div>
        <div className="text-md md:text-lg">{title}</div>
        <div className="flex space-x-2">
          <a
            href={`mailto: ${email}`}
            className="p-2 rounded-full bg-orange-100 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
