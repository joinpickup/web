import { useRouter } from "next/router";
import { BlogPost } from "../../model/blog";
import { motion } from "framer-motion";
import { EventPost } from "../../model/event";

interface Props {
  event: EventPost;
}

const EventCard: React.FC<Props> = (props) => {
  return (
    <>
      <motion.li 
        whileTap={{scale: 0.9}}
        whileHover={{scale: 1.01}}
      >
        <a 
          href={`/collective/events/e/${props.event.slug}`}
          className="flex w-full flex-col space-y-2 rounded-lg border-gray-700 border-2 p-4 cursor-pointer"
        >
          <div className="flex flex-col space-y-1">
            <div className="flex items-center space-x-2">
              <img src={props.event.image} className="rounded-lg bg-cover object-cover h-32 w-full"></img>
            </div>
            <h5 className="mb-2 text-2xl font-bold tracking-tight">
              {props.event.title}
            </h5>
            <h5 className="mb-2 text-md tracking-tight">
              {props.event.description}
            </h5>
          </div>
        </a>
      </motion.li>
    </>
  );
};

export default EventCard;
