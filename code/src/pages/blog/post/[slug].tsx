import {useRouter} from "next/router";
import {useEffect} from "react";
import {Navbar} from "../..";
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
  content: {};
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
        <div className="flex flex-col justify-center items-center w-full space-y-4">
          <div className="flex text-3xl">
            {props.post?.title}
          </div>
        </div>
      </main>
    </>
  )
}

export default BlogPage;
