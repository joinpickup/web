import {NextPage} from "next";
import {Navbar} from "../index";

const Spaces: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex md:flex-row flex-col items-center justify-between w-full space-y-4">
          <div className="flex md:text-xl text-base font-medium md:w-128 order-1">
            <img src="s-background-1.svg"/>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-6xl text-3xl md:w-128">Introducing Spaces</div>
            <div className="flex md:text-xl text-base font-medium md:w-128">Spaces separates your interests into categories. Choose the Spaces that best align with your interests to communicate directly with the people who are into what you’re into.</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Spaces;
