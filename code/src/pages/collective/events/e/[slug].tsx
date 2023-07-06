import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../../../ACE/Button/Button";
import { Navbar } from "../../../../components/navbar";
import { BlogPost } from "../../../../model/blog";
import { getAllPosts } from "../../../../lib/md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { EventPost } from "../../../../model/event";

export async function getServerSideProps(context: any) {
  let events = await getAllPosts("/src/content/events/");
  let event = events.find((event) => event.slug == context.params.slug) ?? null;

  return {
    props: {
      event,
    },
  };
}

interface Props {
  event: EventPost | null;
  content: any;
}

const BlogPage: React.FC<Props> = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!props.event) {
      // todo: handle redirect
      router.push("/collective/events");
    }
  }, []);

  return (
    <>
      <Navbar />
      <main className="m-4 flex flex-col items-center space-y-4 p-4">
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
          <div className="mb-2 flex flex-col space-y-2">
            <div className="flex text-6xl font-bold">{props.event?.title}</div>
            <img src={props.event?.image} className="rounded-lg bg-cover object-cover object-top w-full"></img>
          </div>
          <div className="flex flex-col w-full space-y-2 markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {props.event?.content as string}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
