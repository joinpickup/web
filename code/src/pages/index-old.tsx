import type { NextPage } from "next";
import Head from "next/head";
import Button, { ButtonType } from "../../ACE/Button/Button";
import { Navbar } from "../components/navbar";

const Home: NextPage = () => {
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
};

export const MainContent = () => {
  return (
    <main className="m-4 flex min-h-screen flex-col space-y-4 p-4">
      <div className="flex flex-col space-y-4">
        <div className="flex w-full flex-col space-y-4">
          <div className="flex text-3xl md:w-128 md:text-6xl">
            Looking for community?
          </div>
          <div className="flex text-base font-medium md:w-128 md:text-xl">
            Pickup is an app designed to build community from common interests.
            We want to enable you to find your new community by connecting you
            to others who share your passions.
          </div>
          <div className="flex space-x-3">
            <a
              href="https://discord.gg/NV4AwYVz5X"
              target="_blank"
              data-modal-toggle="defaultModal"
            >
              <Button type={ButtonType.CONTAINED} click={() => {}}>
                <div>Join The Discord</div>
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="s-x-4 flex flex-col">
          <div className="flex text-2xl md:text-5xl">Find People</div>
          <div className="flex text-base font-medium md:w-128 md:text-base">
            Use your profile to showcase your home turf. See where other folks
            are located, what mutual friends they have and send direct messages
            to make plans. All the tools you need, right in one place.
          </div>
        </div>
        <div className="flex">
          <img src="background-1.svg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="s-x-4 flex flex-col md:order-2">
          <div className="flex text-2xl md:text-5xl">Find Groups</div>
          <div className="flex text-base font-medium md:w-128 md:text-base">
            Anyone can make a group, anytime. Groups have feeds, events, photos,
            a chat, members and so much more, all designed to make your
            experience smooth and put your hobbies first.
          </div>
        </div>
        <div className="flex">
          <img src="background-2.svg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="s-x-4 flex flex-col">
          <div className="flex text-2xl md:text-5xl">Create Events</div>
          <div className="flex text-base font-medium md:w-128 md:text-base">
            Events are a key component to community, so we enable anybody to
            create one — for free. Events are interest- and location-specific,
            so you won’t have to go far.
          </div>
        </div>
        <div className="flex">
          <img src="background-3.svg" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="s-x-4 flex flex-col md:order-2">
          <div className="flex text-2xl md:text-5xl">Share Your Interests</div>
          <div className="flex text-base font-medium md:w-128 md:text-base">
            When you went to a great Event, you’ll want other people to know.
            Share scores, pictures and more in your Feed to let your community
            know what you’re up to. See what others are doing, comment, and
            interact with your local community to get excited and start planning
            the next one.
          </div>
        </div>
        <div className="flex">
          <img src="background-4.svg" />
        </div>
      </div>
    </main>
  );
};

export default Home;
