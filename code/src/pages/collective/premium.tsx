import Head from "next/head";
import { Navbar } from "../../components/navbar";

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
      <div className="m-4 flex flex-col items-center space-y-4 p-4"></div>
    </main>
  );
}
