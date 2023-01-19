import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import Badge from "../../ACE/Badge/Badge";
import Button, { ButtonType } from "../../ACE/Button/Button";
import Input from "../../ACE/Input/Input";

export const Navbar: NextPage = () => {
  // router
  const router = useRouter();

  // state
  const [menu, setMenu] = useState(false);
  const [apps, setApps] = useState(false);
  const [community, setCommunity] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <nav className="m-4 flex items-center justify-between md:justify-around">
      <a
        onClick={() => {
          router.push("/");
        }}
        className="flex items-center"
      >
        <div>
          <Button
            className="flex w-full cursor-pointer items-center justify-center rounded-lg p-2 hover:bg-gray-600"
            click={() => {}}
          >
            <>
              <div className="mr-2 rounded-full p-2">
                <img
                  src="/logo-w-text_2.svg"
                  className="h-8"
                  alt="Pickup Logo"
                />
              </div>
            </>
          </Button>
        </div>
      </a>
      <ul className="hidden space-x-2 md:flex">
        <li
          className=""
          onClick={() => {
            setApps(!apps);
            setCommunity(false);
          }}
        >
          <div className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-gray-600">
            <div>Our Apps</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {!apps ? (
            <></>
          ) : (
            <div className="absolute z-10 block translate-y-4 -translate-x-8 rounded-lg bg-gray-600 p-4 shadow-lg">
              <ul className="flex flex-col space-y-2">
                <li
                  className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700"
                  onClick={() => {
                    router.push("/apps/platform");
                  }}
                >
                  <div className="">Pickup Platform</div>
                  <div className="text-sm text-gray-400">
                    A community platform for building connections in your local
                    area.
                  </div>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a className="" href="https://quest.joinpickup.com">
                    <div className="flex items-center space-x-2">
                      <div>The Daily Quest</div>
                      <Badge text="Beta" />
                    </div>
                    <div className="text-sm text-gray-400">
                      A daily challenge to check in with your support system.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className=""
          onClick={() => {
            setCommunity(!community);
            setApps(false);
          }}
        >
          <div className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-gray-600">
            <div>Community</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          {!community ? (
            <></>
          ) : (
            <div className="absolute z-10 block translate-y-4 -translate-x-8 rounded-lg bg-gray-600 p-4 shadow-lg">
              <ul className="flex flex-col space-y-2">
                <li
                  className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700"
                  onClick={() => {
                    router.push("/blog");
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div>Blog</div>
                    <Badge text="Beta" />
                  </div>
                  <div className="text-sm text-gray-400">
                    Articles about building community, the company and generally
                    working to make the world better than we found it.
                  </div>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a
                    className=""
                    href="https://discord.gg/eJkfddvpgD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="">Discord</div>
                    <div className="text-sm text-gray-400">
                      Find information about development, interact with the
                      founders and suggest improvements.
                    </div>
                  </a>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a className="" href="https://github.com/joinpickup/">
                    <div className="">Github</div>
                    <div className="text-sm text-gray-400">
                      If you want to take a look at the technology that we use.
                      Most of our repositories are private right now, but
                      hopefully we'll have open source projects soon.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li
          className="flex cursor-pointer items-center space-x-2 rounded-lg p-2 hover:bg-gray-600"
          onClick={() => {
            router.push("/company");
          }}
        >
          <div>Company Info</div>
        </li>
      </ul>
      <div className="hidden space-x-2 lg:flex">
        {/* <div className="min-w-fit">
          <Button click={() => {}}>
            <div>Log In</div>
          </Button>
        </div> */}
        <div className="min-w-fit">
          <a
            className=""
            href="https://discord.gg/eJkfddvpgD"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button type={ButtonType.CONTAINED} click={() => {}}>
              <div>Join The Discord</div>
            </Button>
          </a>
        </div>
      </div>

      <div className="flex md:hidden">
        <Button
          click={() => {
            setCommunity(false);
            setApps(false);
            setMenu(!menu);
          }}
        >
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </>
        </Button>
        {!menu ? (
          <></>
        ) : (
          <div className="absolute left-0 z-10 m-4 flex translate-y-12 flex-col space-y-2 rounded-lg bg-gray-600 p-4 shadow-lg">
            <div className="flex flex-col">
              <div className="p-4 text-2xl">Our Apps</div>
              <ul className="flex flex-col space-y-2">
                <li
                  className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700"
                  onClick={() => {
                    router.push("/apps/platform");
                  }}
                >
                  <div className="">Pickup Platform</div>
                  <div className="text-sm text-gray-400">
                    A community platform for building connections in your local
                    area.
                  </div>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a className="" href="https://quest.joinpickup.com">
                    <div className="flex items-center space-x-2">
                      <div>The Daily Quest</div>
                      <Badge text="Beta" />
                    </div>
                    <div className="text-sm text-gray-400">
                      A daily challenge to check in with your support system.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="p-4 text-2xl">Community</div>
              <ul className="flex flex-col space-y-2">
                <li
                  className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700"
                  onClick={() => {
                    router.push("/blog");
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div>Blog</div>
                    <Badge text="Beta" />
                  </div>
                  <div className="text-sm text-gray-400">
                    Articles about building community, the company and generally
                    working to make the world better than we found it.
                  </div>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a
                    className=""
                    href="https://discord.gg/eJkfddvpgD"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="">Discord</div>
                    <div className="text-sm text-gray-400">
                      Find information about development, interact with the
                      founders and suggest improvements.
                    </div>
                  </a>
                </li>
                <li className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700">
                  <a className="" href="https://github.com/joinpickup">
                    <div className="">Github</div>
                    <div className="text-sm text-gray-400">
                      If you want to take a look at the technology that we use.
                      Most of our repositories are private right now, but
                      hopefully we'll have open source projects soon.
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="p-4 text-2xl">Company</div>
              <ul className="flex flex-col space-y-2">
                <li
                  className="max-w-md cursor-pointer rounded-lg p-4 hover:bg-gray-700"
                  onClick={() => {
                    router.push("/company");
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <div>Pickup LLC</div>
                  </div>
                  <div className="text-sm text-gray-400">
                    We believe that the system is broken and that its up to
                    everyon to build it back better.
                  </div>
                </li>
              </ul>
            </div>
            {/* <div className="flex w-full flex-col space-y-2 md:w-fit md:flex-row md:space-y-0 md:space-x-2">
              <Input
                className="h-10 w-full rounded-lg bg-gray-500 px-4 font-bold text-gray-300 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email..."
                type="email"
                value={email}
                change={setEmail}
              />
              <div className="">
                <Button type={ButtonType.CONTAINED} click={() => {}}>
                  <div>Join The Waitlist</div>
                </Button>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </nav>
  );
};

let menu = "";
let setMenu = Function();
let temp = <div></div>;
