import {useRouter} from "next/router";
import {BlogPost} from "../../model/blog";

interface Props {
  post: BlogPost;
}


const BlogCard: React.FC<Props> = (props) => {
  const router = useRouter()

  return (
    <>
      <a onClick={() => router.push(`/blog/p/${props.post.slug}`)} className="block p-7 bg-gray-800 w-full rounded-lg border shadow-md hover:bg-gray-600 cursor-pointer space-y-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.post.title}</h5>
        <p className="font-normal text-lg text-gray-400">{props.post.summary}
        </p>
        <div className="flex space-x-2 items-center">
          <p className="font-normal text-md text-gray-400">{props.post.author} </p>
          <p className="font-normal text-sm text-gray-500">{props.post.published.toString()} </p>
        </div>
      </a>
    </>
  )
}

export default BlogCard;

