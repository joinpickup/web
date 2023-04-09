import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "../lib/useMediaQuery";
import { motion } from "framer-motion";

export function Navbar() {
  // router
  const router = useRouter();
  const [path, setPath] = useState("");
  const isMobile = useMediaQuery(600);

  // modals
  const [allModalOpen, setAllModalOpen] = useState(false);
  const [productModalOpen, setProductModalOpen] = useState(false);
  const [collectiveModalOpen, setCollectiveModalOpen] = useState(false);
  const [companyModalOpen, setCompanyModalOpen] = useState(false);

  useEffect(() => {
    if (router.asPath == "/") {
      setPath("home");
    } else if (router.asPath.includes("/products")) {
      setPath("products");
    } else if (router.asPath.includes("/collective")) {
      setPath("collective");
    } else if (router.asPath.includes("/company")) {
      setPath("company");
    }
  }, []);

  function buildAllModal() {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overscroll-x-none overscroll-y-none md:inset-0">
        <div className="w-2/3 h-5/6 bg-white z-10 absolute top-0 right-0 m-4 rounded-lg shadow-2xl flex">
          <div className="w-full flex flex-col space-y-4 p-4 overflow-auto">
            <div className="flex justify-end">
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setAllModalOpen(false);
                }}
                className="rounded-lg p-1 hover:bg-gray-100  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "products"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Products
              </div>
              <ul className="flex flex-col space-y-1">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/products/local" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Local</div>
                    <div className="text-sm text-gray-500">
                      The digital solution to finding your local community.
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "collective"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Collective
              </div>
              <ul className="flex flex-col space-y-2">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/collective/premium" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Premium</div>
                    <div className="text-sm text-gray-500">
                      What you get for being a member
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/collective/blog" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Blog</div>
                    <div className="text-sm text-gray-500">
                      Find out more about us
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://discord.gg/NV4AwYVz5X"
                    target="_blank"
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Discord</div>
                    <div className="text-sm text-gray-500">
                      Get involed with the inner working of the company
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "company"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Company
              </div>
              <ul className="flex flex-col space-y-2">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/company/mission" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Mission</div>
                    <div className="text-sm text-gray-500">
                      Learn about the company values
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/company/team" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Team</div>
                    <div className="text-sm text-gray-500">
                      Find out more information about the team begin Pickup
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function buildProductModal() {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overscroll-x-none overscroll-y-none md:inset-0">
        <div className="w-2/3 bg-white z-10 absolute top-0 right-0 m-4 rounded-lg shadow-2xl flex">
          <div className="w-full flex flex-col space-y-4 p-4">
            <div className="flex justify-end">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setProductModalOpen(false);
                }}
                className="rounded-lg p-1 hover:bg-gray-100  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "products"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Products
              </div>
              <ul className="flex flex-col space-y-1">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/products/local" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Local</div>
                    <div className="text-sm text-gray-500">
                      The digital solution to finding your local community.
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function buildCollectiveModal() {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overscroll-x-none overscroll-y-none md:inset-0">
        <div className="w-2/3 bg-white z-10 absolute top-0 right-0 m-4 rounded-lg shadow-2xl flex">
          <div className="w-full flex flex-col space-y-4 p-4">
            <div className="flex justify-end">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCollectiveModalOpen(false);
                }}
                className="rounded-lg p-1 hover:bg-gray-100  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "collective"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Collective
              </div>
              <ul className="flex flex-col space-y-2">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/collective/premium" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Premium</div>
                    <div className="text-sm text-gray-500">
                      What you get for being a member
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/collective/blog" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Blog</div>
                    <div className="text-sm text-gray-500">
                      Find out more about us
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a
                    href="https://discord.gg/NV4AwYVz5X"
                    target="_blank"
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Discord</div>
                    <div className="text-sm text-gray-500">
                      Get involed with the inner working of the company
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  function buildCompanyModal() {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 overscroll-x-none overscroll-y-none md:inset-0">
        <div className="w-2/3 bg-white z-10 absolute top-0 right-0 m-4 rounded-lg shadow-2xl flex">
          <div className="w-full flex flex-col space-y-4 p-4">
            <div className="flex justify-end">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  setCompanyModalOpen(false);
                }}
                className="rounded-lg p-1 hover:bg-gray-100  cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
            <div className="flex flex-col space-y-2">
              <div
                className={`${
                  path == "company"
                    ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                    : ""
                } text-2xl`}
              >
                Company
              </div>
              <ul className="flex flex-col space-y-2">
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/company/mission" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Mission</div>
                    <div className="text-sm text-gray-500">
                      Learn about the company values
                    </div>
                  </a>
                </motion.li>
                <motion.li
                  whileTap={{ scale: 0.9 }}
                >
                  <a href="/company/team" 
                    className="flex flex-col w-full cursor-pointer justify-start rounded-lg p-2 hover:bg-[#E4F0D1]"
                  >
                    <div className="text-lg">Team</div>
                    <div className="text-sm text-gray-500">
                      Find out more information about the team begin Pickup
                    </div>
                  </a>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav className="w-full p-4 flex justify-between items-center">
        <motion.a
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          href="/"
          className={`${
            path == "home"
              ? "underline decoration-orange-500 decoration-2 underline-offset-2"
              : ""
          } flex items-center space-x-2 hover:text-orange-500 cursor-pointer`}
        >
          <img src="/svg/pickup-logo-v2.svg" className="w-12 h-12"></img>
          <div className="">Pickup, LLC</div>
        </motion.a>
        {isMobile ? (
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setAllModalOpen(true);
            }}
            className="rounded-lg p-1 hover:bg-orange-200 hover:text-gray-700 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </motion.button>
        ) : (
          <div className="flex space-x-2 items-center">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setProductModalOpen(true);
              }}
              className={`${
                path == "products"
                  ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                  : ""
              } flex items-center space-x-2 hover:text-orange-500 cursor-pointer`}
            >
              Product
            </motion.button>
            <svg
              className="fill-orange-500"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" />
            </svg>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCollectiveModalOpen(true);
              }}
              className={`${
                path == "collective"
                  ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                  : ""
              } flex items-center space-x-2 hover:text-orange-500 cursor-pointer`}
            >
              Collective
            </motion.button>
            <svg
              className="fill-orange-500"
              width="4"
              height="4"
              viewBox="0 0 4 4"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2" cy="2" r="2" />
            </svg>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                setCompanyModalOpen(true);
              }}
              className={`${
                path == "company"
                  ? "underline decoration-orange-500 decoration-2 underline-offset-2"
                  : ""
              } flex items-center space-x-2 hover:text-orange-500 cursor-pointer`}
            >
              Company
            </motion.button>
          </div>
        )}
      </nav>
      {isMobile && allModalOpen ? buildAllModal() : <></>}
      {productModalOpen ? buildProductModal() : <></>}
      {collectiveModalOpen ? buildCollectiveModal() : <></>}
      {companyModalOpen ? buildCompanyModal() : <></>}
    </>
  );
}
