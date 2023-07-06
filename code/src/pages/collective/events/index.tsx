import BlogCard from "../../../components/blog/card";
import { BlogPost } from "../../../model/blog";
import { Navbar } from "../../../components/navbar";
import { getAllPosts } from "../../../lib/md";
import EventCard from "../../../components/events/card";
import { EventPost } from "../../../model/event";

export async function getServerSideProps() {
  let events = await getAllPosts("/src/content/events/");

  return {
    props: {
      events,
    },
  };
}

interface Props {
  events: EventPost[];
}

const Blog: React.FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4">
        <div className="text-3xl">
          Pickup sponsored events
        </div>
        <div>
          <ul className="flex flex-col p-4 md:w-128 w-full space-y-4">
            {props.events.map((event) => {
              return <EventCard event={event} key={event.slug} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

export default Blog;
