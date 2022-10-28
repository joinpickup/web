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
            <div className="flex md:text-xl text-base font-medium md:w-128">Spaces allow you to separate your interests into different sections of the app. instead of seeing events, posts and groups relating to all interests, choose the space relating to the interest you want to see.</div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Spaces;
