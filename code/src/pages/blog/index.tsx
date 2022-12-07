import {useEffect} from "react";
import BlogCard from "../../components/blog/card";
import {getBlogPosts, getDatabase} from "../../lib/notion";
import {BlogPost} from "../../model/blog";
import {Navbar} from "../../components/navbar";

export async function getServerSideProps() {
  let posts = await getBlogPosts()
  const database = await getDatabase(process.env.NOTION_PAGE_ID as string)

  return {
    props: {
      posts,
      database
    }
  }
}


interface Props {
  posts: BlogPost[];
  database: any;
}


const Blog: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.posts)
    console.log(props.database)
  })
  
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center items-center w-full space-y-4">
          {props.posts.length == 0 ? <div>Coming Soon</div>
          : <></>
          }
          {props.posts.map((post) => {
            return <BlogCard post={post} key={post.id}/>
          })}
        </div>
      </main>
    </>
  )
}

export default Blog;
