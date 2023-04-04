import Head from "next/head";

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
        <meta property="og:title" content="Pickup, LLC"/>
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
      <MainContent />
    </>
  );
}

function MainContent() {
  return (
    <main className="w-full">
      {/* <div className="h-20"></div> */}
      <div className="bg-gradient-to-b from-[#E8B89B] to-[#BCC7A8] p-4">
        <div className="p-20 bg-gray-700 md:mx-20 m-6 rounded-xl flex flex-col items-center space-y-2 text-7xl text-gray-100 shadow-lg shadow-black">
          <div className="outline-2 outline-gray-100">
            Some kind of <br /> main content
          </div>
          <div className="text-2xl">
            This is some basic description
          </div>
          <div className="space-x-2">
            <button className="rounded-lg py-2 px-4 text-xl bg-orange-500 shadow-lg shadow-black">Call To Action</button>
            <button className="rounded-lg py-2 px-4 text-xl border border-gray-400 shadow-lg shadow-black">Call To Action</button>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#BCC7A8] to-[#ADCFD7] p-4">
        <div className="p-20 m-4 bg-gray-700 rounded-xl flex flex-col items-center space-y-2 text-7xl text-gray-100 shadow-lg shadow-black">
          <div className="outline-2 outline-gray-100">
            Some kind of <br/> main content
          </div>
          <div className="text-2xl">
            This is some basic description
          </div>
          <div className="space-x-2">
            <button className="rounded-lg py-2 px-4 text-xl bg-orange-500 shadow-lg shadow-black">Call To Action</button>
            <button className="rounded-lg py-2 px-4 text-xl border border-gray-400 shadow-lg shadow-black">Call To Action</button>
          </div>
        </div>
      </div>
    </main>
  );
}
