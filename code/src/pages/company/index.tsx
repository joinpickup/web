import {NextPage} from "next";
import {Navbar} from "../../components/navbar";

const Company: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center w-full space-y-4">
          <div className="flex flex-col space-y-4">
            <div className="flex md:text-6xl text-3xl md:w-128">About Pickup LLC</div>
            <div className="flex md:text-xl text-base font-medium md:w-128">We are a close knit team focused on implementing meaningful change at the local level. From community building, to sustainable technology, to tools to help people slow down and take in the world around them, at its core our software is designed to give the experience back to the user.</div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="md:text-3xl text-2xl">
              Our Principles
            </div>
            <div className="md:text-xl text-base font-medium">
              <ul className="list-disc space-y-2 pl-5">
                <li>Empowering individuals</li>
                <li>Lifelong learning</li>
                <li>People over profit</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="md:text-3xl text-2xl">
              Contact Us
            </div>
            <div className="md:text-xl text-base font-medium">
              <ul className="list-none space-y-2">
                <li>hello@joinpickup.com</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Company;
