import {useRouter} from "next/router";
import {BlogPost} from "../../model/blog";

interface Props {
  post: BlogPost;
}


const BlogCard: React.FC<Props> = (props) => {
  const router = useRouter()

  return (
    <>
      <a onClick={() => router.push(`/blog/p/${props.post.slug}`)} className="block p-7 bg-white rounded-lg border shadow-md bg-gray-800 dark:border-gray-700 hover:bg-gray-600 cursor-pointer">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.post.title}</h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
      </a>
    </>
  )
}

export default BlogCard;

