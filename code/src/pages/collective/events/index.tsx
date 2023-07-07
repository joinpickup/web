import useSWR, { Fetcher } from 'swr';
import EventCard from "../../../components/events/card";
import { Navbar } from "../../../components/navbar";
import { EventPost } from "../../../model/event";

const fetcher: Fetcher<EventPost[]> = (url: string) => fetch(url).then((res) => res.json());

export default function Events() {
  const { data: events, error } = useSWR('/api/events', fetcher);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4">
        <div className="text-3xl">
          Pickup sponsored events
        </div>
        <div>
          <ul className="flex flex-col p-4 md:w-128 w-full space-y-4">
            {events?.map((event) => {
              return <EventCard event={event} key={event.slug} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};

