import {NextPage} from "next";
import {Navbar} from "../../components/navbar";

const Company: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center items-center w-full space-y-4">
          <div className="flex md:text-6xl text-3xl">Coming Soon</div>
        </div>
      </main>
    </>
  )
}

export default Company;
