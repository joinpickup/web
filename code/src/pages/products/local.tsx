import Head from "next/head";
import { Navbar } from "../../components/navbar";
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
        <meta name="description" content="The digital bulletin board" />
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
      <div 
        className="m-4 md:mx-20 p-8 rounded-xl bg-orange-200 text-[#333333] shadow-lg flex md:flex-row flex-col md:space-x-2 space-y-2 items-center"
      >
        <div className="order-2 md:order-1 flex flex-col space-y-2">
          <div className="text-4xl md:text-5xl">
            <span className="underline decoration-gray-700 decoration-2 underline-offset-2">Local</span> is your digital bulletin board</div>
          <div className="text-base md:text-lg">
            Get connected to your local community by finding what{"'"}s happening nearby.
          </div>
          <MailchimpEmail />
        </div>
        <div className="order-1 md:order-2">
          <img src="/img/community.svg"></img>
        </div>
      </div>
    </main>
  );
}

function MailchimpEmail() {
  return (
    <div className="">
      <div id="mc_embed_signup" className="flex flex-col">
        <form
          action="https://joinpickup.us17.list-manage.com/subscribe/post?u=9ef47dac0b0b5aafa49194de2&id=fe8d35ddcb&f_id=00c753e0f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate={true}
        >
          <div
            id="mc_embed_signup_scroll"
            className="validate flex flex-col space-y-2"
          >
            <div className="flex flex-col space-y-2 md:space-y-0 md:flex-row md:-space-x-2">
              <input
                type="email"
                placeholder="Join the waitlist..."
                name="EMAIL"
                className="required email h-10 w-full md:w-64 rounded-lg px-4 font-bold bg-[#F7E8DE]  focus:border-primary focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-black"
                id="mce-EMAIL"
              />
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_9ef47dac0b0b5aafa49194de2_fe8d35ddcb"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div>
              <motion.input
                type="submit"
                defaultValue="Subscribe"
                value="Join"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button flex  w-full md:w-24 cursor-pointer items-center justify-center rounded-lg bg-green-500 p-2 hover:bg-green-600 text-[#F7E8DE]"
                required={true}
              />
            </div>
            <div id="mce-responses" className="clear foot">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
          </div>
        </form>
      </div>
      {/*End mc_embed_signup*/}
    </div>
  );
}
