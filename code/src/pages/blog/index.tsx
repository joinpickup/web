import {useEffect} from "react";
import {getBlogPosts} from "../../lib/notion";
import {Navbar} from "../index";

export async function getServerSideProps() {
  let posts = await getBlogPosts()

  return {
    props: {
      posts
    }
  }
}


interface Props {
  posts: any[];
}


const Blog: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.posts);
  },[])

  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center items-center w-full space-y-4">
        </div>
      </main>
    </>
  )
}

export default Blog;
