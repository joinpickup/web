import { useRouter } from "next/router";
import { useEffect } from "react";
import Button from "../../../../ACE/Button/Button";
import PageContent from "../../../components/blog/content";
import { Navbar } from "../../../components/navbar";
import { getBlocks, getBlogPosts, getPage } from "../../../lib/notion";
import { BlogPost } from "../../../model/blog";

export async function getServerSideProps(context: any) {
  let posts = await getBlogPosts();
  let post = posts.find((post) => post.slug == context.params.slug) ?? null;
  let content = {};
  if (post) {
    content = await getBlocks(post?.id as string);
  }

  return {
    props: {
      post,
      content,
    },
  };
}

interface Props {
  post: BlogPost | null;
  content: any;
}

const BlogPage: React.FC<Props> = (props) => {
  const router = useRouter();

  useEffect(() => {
    if (!props.post) {
      // todo: handle redirect
      router.push("/blog");
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
              href="/blog"
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
            <div className="flex text-6xl font-bold">{props.post?.title}</div>
            <div className="flex items-center space-x-2 text-xl">
              <div className="text-md">{props.post?.author}</div>
              <div className="text-sm text-gray-400">
                {props.post?.published.toString()}
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <PageContent content={props.content} />
          </div>
        </div>
      </main>
    </>
  );
};

export default BlogPage;
