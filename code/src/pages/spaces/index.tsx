import { NextPage } from "next";
import { Navbar } from "../../components/navbar";

const Spaces: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col space-y-4 p-4">
        <div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row">
          <div className="order-1 flex text-base font-medium md:w-128 md:text-xl">
            <img src="s-background-1.svg" />
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex text-3xl md:w-128 md:text-6xl">
              Introducing Spaces
            </div>
            <div className="flex text-base font-medium md:w-128 md:text-xl">
              Spaces separates your interests into categories. Choose the Spaces
              that best align with your interests to communicate directly with
              the people who are into what you’re into.
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Spaces;
