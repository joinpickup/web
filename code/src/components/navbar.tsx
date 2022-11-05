import type { NextPage } from "next";
import {useRouter} from "next/router";
import {useState} from "react";

export const Navbar: NextPage = () => {
  const router = useRouter()
  const [menu, setMenu] = useState(false)

  return (
    <nav className="px-2 sm:px-4 py-2.5">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a onClick={() => {router.push("/")}} className="flex items-center">
          <div className="mr-2 p-2 rounded-full">
              <img src="/pickup-logo-v2.svg" className="h-6 sm:h-9" alt="Pickup Logo" />
          </div>
            <span className="self-center text-gray-300 text-2xl whitespace-nowrap">Pickup</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false" onClick={() => {setMenu(!menu)}}>
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className={`${menu ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li className="hover:bg-gray-600 rounded-lg">
              <a onClick={() => {router.push("/spaces")}} className="block py-2 pr-4 pl-3">Spaces</a>
            </li>
            <li className="hover:bg-gray-600 rounded-lg">
              <a onClick={() => {router.push("/blog")}} className="block py-2 pr-4 pl-3">Blog</a>
            </li>
            <li className="hover:bg-gray-600 rounded-lg">
              <a onClick={() => {router.push("/company")}}  className="block py-2 pr-4 pl-3">Company</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
