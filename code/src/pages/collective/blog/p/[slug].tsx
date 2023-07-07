import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../../../ACE/Button/Button";
import { Navbar } from "../../../../components/navbar";
import { BlogPost } from "../../../../model/blog";
import { getAllPosts } from "../../../../lib/md";
import ReactMarkdown from "react-markdown";
import useSWR, { Fetcher } from 'swr';
import remarkGfm from "remark-gfm";

const fetcher: Fetcher<BlogPost> = (url: string) => fetch(url).then((res) => res.json());

export default function BlogPage() {
  const router = useRouter();
  const { data: post, error } = useSWR(`/api/posts?slug=${router.query.slug}`, fetcher);

  return (
    <>
      <Navbar />
      <main className="m-4 flex flex-col items-center space-y-4 p-4">
        <div className="flex flex-col space-y-4 font-medium md:w-128">
          <div className="w-fit">
            <a
              className="flex cursor-pointer items-center space-x-2 text-orange-400 hover:underline"
              href="/collective/blog"
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
              <div> All Posts </div>
            </a>
          </div>
          <div className="mb-2 flex flex-col space-y-2">
            <div className="flex text-6xl font-bold">{post?.title}</div>
            <div className="flex items-center space-x-2 text-xl">
              <div className="text-md">{post?.author}</div>
              <div className="text-sm text-gray-400">
                {post?.publishedDate.toString()}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full space-y-2 markdown">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
            >
              {post?.content as string}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
};
