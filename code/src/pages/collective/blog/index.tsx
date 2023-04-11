import BlogCard from "../../../components/blog/card";
import { BlogPost } from "../../../model/blog";
import { Navbar } from "../../../components/navbar";
import { getAllPosts } from "../../../lib/md";

export async function getServerSideProps() {
  let posts = await getAllPosts("/src/posts/");

  return {
    props: {
      posts,
    },
  };
}

interface Props {
  posts: BlogPost[];
}

const Blog: React.FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4">
        <div className="text-3xl">
          Pickup Blog
        </div>
        <div>
          <ul className="flex flex-col p-4 md:w-128 w-full space-y-4">
            {props.posts.map((post) => {
              return <BlogCard post={post} key={post.slug} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Blog;
