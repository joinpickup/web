import { useRouter } from "next/router";
import { BlogPost } from "../../model/blog";

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <>
      <li className="flex w-full flex-col space-y-2 rounded-lg bg-gray-600 p-4 shadow-lg">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <p className="text-md font-normal text-gray-300">
              {props.post.author}
            </p>
            <img className="h-1" src="/svg/dot-divider.svg" />
            <p className="text-sm font-normal text-gray-400">
              {props.post.published.toString()}{" "}
            </p>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            {props.post.title}
          </h5>
          <p className="text-lg font-normal text-gray-400">
            {props.post.summary}
          </p>
        </div>
        <a
          className="cursor-pointer text-orange-400 hover:underline"
          href={`/blog/p/${props.post.slug}`}
        >
          Read More...
        </a>
      </li>
    </>
  );
};

export default BlogCard;
