import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Pickup</title>
        <meta name="description" content="Landing page for pickup" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;500;700&display=swap" rel="stylesheet" />
      </Head>
      <Navbar />
      <MainContent />
    </>
  );
};


export const Navbar: NextPage = () => {
  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex items-center">
          <div className="mr-2 p-2 rounded-full">
              <img src="/pickup-logo-v2.svg" className="h-6 sm:h-9" alt="Pickup Logo" />
          </div>
            <span className="self-center text-gray-300 text-2xl whitespace-nowrap">Pickup</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 dark:border-gray-700">
            <li>
              <a href="/spaces" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Spaces</a>
            </li>
            <li>
              <a href="/blog" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blog</a>
            </li>
            <li>
              <a href="/company" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-300 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Company</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export const MainContent = () => {
  return (
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col w-full space-y-4">
            <div className="flex md:text-6xl text-3xl md:w-128">Looking for community?</div>
            <div className="flex md:text-xl text-base font-medium md:w-128">Pickup is an app designed to build community from common interests. We want to enable you to find your new community by connecting you to others who share your passions.</div>
            <div className="flex space-x-3">
              <button className="text-gray-900 bg-green-400 hover:bg-green-400 focus:ring-4 focus:ring-green-400 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-400 dark:hover:bg-green-500 focus:outline-none dark:focus:ring-green-600" data-modal-toggle="defaultModal">Join The Discord</button>
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
