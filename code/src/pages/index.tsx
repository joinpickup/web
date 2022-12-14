import type { NextPage } from "next";
import Head from "next/head";
import {Navbar} from "../components/navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pickup</title>
        <script defer data-domain="joinpickup.com" src="https://analytics.joinpickup.com/js/script.js"></script>
        <meta name="description" content="Landing page for pickup" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <MainContent />
    </>
  );
};

export const MainContent = () => {
  return (
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full space-y-4">
            <div className="flex md:text-6xl text-3xl md:w-128">Looking for community?</div>
            <div className="flex md:text-xl text-base font-medium md:w-128">Pickup is an app designed to build community from common interests. We want to enable you to find your new community by connecting you to others who share your passions.</div>
            <div className="flex space-x-3">
              <a href="https://discord.gg/NV4AwYVz5X" target="_blank" className="focus:ring-4 font-bold rounded-lg text-md px-5 py-2.5 mr-2 mb-2 bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-green-600 text-gray-700" data-modal-toggle="defaultModal">Join The Discord</a>
            </div>
          </div>
        </div>
        <div className="flex md:justify-between md:items-center md:flex-row flex-col">
          <div className="flex flex-col s-x-4">
            <div className="flex md:text-5xl text-2xl">Find People</div>
            <div className="flex md:text-base text-base font-medium md:w-128">Use your profile to showcase your home turf. See where other folks are located, what mutual friends they have and send direct messages to make plans. All the tools you need, right in one place.</div>
          </div>
          <div className="flex">
            <img src="background-1.svg"/>
          </div>
        </div>
        <div className="flex md:justify-between md:items-center md:flex-row flex-col">
          <div className="flex flex-col s-x-4 md:order-2">
            <div className="flex md:text-5xl text-2xl">Find Groups</div>
            <div className="flex md:text-base text-base font-medium md:w-128">Anyone can make a group, anytime. Groups have feeds, events, photos, a chat, members and so much more, all designed to make your experience smooth and put your hobbies first.</div>
          </div>
          <div className="flex">
            <img src="background-2.svg"/>
          </div>
        </div>
        <div className="flex md:justify-between md:items-center md:flex-row flex-col">
          <div className="flex flex-col s-x-4">
            <div className="flex md:text-5xl text-2xl">Create Events</div>
            <div className="flex md:text-base text-base font-medium md:w-128">Events are a key component to community, so we enable anybody to create one — for free. Events are interest- and location-specific, so you won’t have to go far.</div>
          </div>
          <div className="flex">
            <img src="background-3.svg"/>
          </div>
        </div>
        <div className="flex md:justify-between md:items-center md:flex-row flex-col">
          <div className="flex flex-col s-x-4 md:order-2">
            <div className="flex md:text-5xl text-2xl">Share Your Interests</div>
            <div className="flex md:text-base text-base font-medium md:w-128">When you went to a great Event, you’ll want other people to know. Share scores, pictures and more in your Feed to let your community know what you’re up to. See what others are doing, comment, and interact with your local community to get excited and start planning the next one.</div>
          </div>
          <div className="flex">
            <img src="background-4.svg"/>
          </div>
        </div>
      </main>
  )
}

export default Home;
