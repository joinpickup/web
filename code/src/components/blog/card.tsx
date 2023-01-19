import { useRouter } from "next/router";
import { BlogPost } from "../../model/blog";

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <>
      <a
        onClick={() => router.push(`/blog/p/${props.post.slug}`)}
        className="block w-full cursor-pointer space-y-2 rounded-lg bg-gray-700 p-4 hover:bg-gray-800"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {props.post.title}
        </h5>
        <p className="text-lg font-normal text-gray-400">
          {props.post.summary}
        </p>
        <div className="flex items-center space-x-2">
          <p className="text-md font-normal text-gray-400">
            {props.post.author}{" "}
          </p>
          <p className="text-sm font-normal text-gray-500">
            {props.post.published.toString()}{" "}
          </p>
        </div>
      </a>
    </>
  );
};

export default BlogCard;
