import { useRouter } from "next/router";
import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import useSWR, { Fetcher } from 'swr';
import { Navbar } from "../../../../components/navbar";
import { EventPost } from "../../../../model/event";
import { motion } from "framer-motion";

const fetcher: Fetcher<EventPost> = (url: string) => fetch(url).then((res) => res.json());

export default function EventPage() {
  const router = useRouter();
  const { data: event, error } = useSWR(`/api/events?slug=${router.query.slug}`, fetcher);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4 mx-4 px-4">
          <motion.a 
            whileTap={{ scale: 0.9 }}
            whileHover={{scale: 1.2}}
              className="
              fixed
              p-4 text-md 
              bottom-4
              right-4
              justify-center
              shadow-lg
              flex 
              cursor-pointer 
              items-center 
              text-xl text-gray-800 rounded-full bg-orange-400
              "
              href={event?.rsvpLink}
              target="_blank"
            >
              <div>RSVP</div>
          </motion.a>
        <div className="flex flex-col space-y-4 font-medium md:w-128">
          <div className="w-fit">
            <a
              className="flex cursor-pointer items-center space-x-2 text-orange-400 hover:underline"
              href="/collective/events"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path
                  fillRule="evenodd"
                  d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div> All Events</div>
            </a>
          </div>
      {
        event == undefined ? <></> : 
        <>
          <div className="mb-2 flex flex-col space-y-2">
            <div className="flex text-3xl font-bold">{event?.title}</div>
            <div className="flex text-md">Description: {event?.description}</div>
            <address className="flex text-md">Address: {event?.address}</address>
            <div className="flex text-md">Date: {event?.eventDate.toString()}</div>
            <img src={event?.image} className="rounded-lg bg-cover object-cover object-top w-full"></img>
          </div>
          <div className="flex flex-col w-full space-y-2 markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {event?.content as string}
            </ReactMarkdown>
          </div>
        </>
    }
        </div>
      </main>
    </>
  );
};
