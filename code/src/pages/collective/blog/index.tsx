import { useEffect } from "react";
import BlogCard from "../../../components/blog/card";
import { getBlogPosts, getDatabase } from "../../../lib/notion";
import { BlogPost } from "../../../model/blog";
import { Navbar } from "../../../components/navbar";

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
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4">
        <ul className="flex flex-col space-y-4 p-4 md:w-128">
          {props.posts.map((post) => {
            return <BlogCard post={post} key={post.id} />;
          })}
        </ul>
      </main>
    </>
  );
};

export default Blog;
