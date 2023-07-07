import { useRouter } from "next/router";
import { BlogPost } from "../../model/blog";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  post: BlogPost;
}

const BlogCard: React.FC<Props> = (props) => {
  return (
    <>
      <motion.li 
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.01}}
      >
        <a 
          href={`/collective/blog/p/${props.post.slug}`}
          className="flex w-full flex-col space-y-2 rounded-lg border-gray-700 border-2 p-4 cursor-pointer"
        >
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <p className="text-md font-normal">
                {props.post.author}
              </p>
              <img className="h-1" src="/svg/dot-divider.svg" />
              <p className="text-sm font-normal">
                {props.post.publishedDate?.toString()}
              </p>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {props.post.title}
            </h5>
            <p className="text-lg font-normal">
              {props.post.description}
            </p>
          </div>
        </a>
      </motion.li>
    </>
  );
};

export default BlogCard;
