import {useRouter} from "next/router";
import {useEffect} from "react";
import PageContent from "../../../components/blog/content";
import {Navbar} from "../../../components/navbar";
import {getBlocks, getBlogPosts, getPage} from "../../../lib/notion";
import {BlogPost} from "../../../model/blog";

export async function getServerSideProps(context: any) {
  let posts = await getBlogPosts()
  let post = posts.find(post => post.slug == context.params.slug) ?? null
  let content = {};
  if (post) {
    content = await getBlocks(post?.id as string)
  }

  return {
    props: {
      post,
      content,
    }
  }
}


interface Props {
  post: BlogPost | null;
  content: any;
}


const BlogPage: React.FC<Props> = (props) => {
  const router = useRouter()

  useEffect(() => {
    if (!props.post) {
      // todo: handle redirect
      router.push("/blog");
    }
  },[])

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center w-full space-y-4">
          <div className="flex flex-col space-y-1 mb-2">
            <div className="flex text-6xl">
              {props.post?.title}
            </div>
            <div className="flex text-xl space-x-2 items-center">
              <div className="font-medium text-md">
                {props.post?.author}
              </div>
              <div className="font-medium text-sm text-gray-400">
                {props.post?.published.toString()}
              </div>
            </div>
          </div>
          <hr />
          <div className="flex w-full">
            <PageContent content={props.content}/>
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogPage;
