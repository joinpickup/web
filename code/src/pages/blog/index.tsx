import { useEffect } from "react";
import BlogCard from "../../components/blog/card";
import { getBlogPosts, getDatabase } from "../../lib/notion";
import { BlogPost } from "../../model/blog";
import { Navbar } from "../../components/navbar";

export async function getServerSideProps() {
  let posts = await getBlogPosts();
  const database = await getDatabase(process.env.NOTION_PAGE_ID as string);

  return {
    props: {
      posts,
      database,
    },
  };
}

interface Props {
  posts: BlogPost[];
  database: any;
}

const Blog: React.FC<Props> = (props) => {
  useEffect(() => {
    console.log(props.posts);
    console.log(props.database);
  });

  return (
    <>
      <Navbar />
      <main className="container flex min-h-screen flex-col space-y-4 bg-gray-600 p-4">
        <div className="flex w-full flex-col items-center justify-center space-y-4">
          {props.posts.length == 0 ? <div>Coming Soon</div> : <></>}
          {props.posts.map((post) => {
            return <BlogCard post={post} key={post.id} />;
          })}
        </div>
      </main>
    </>
  );
};

export default Blog;
