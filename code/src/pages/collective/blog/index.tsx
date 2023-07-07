import useSWR, { Fetcher } from 'swr';
import { EventPost } from '../../../model/event';
import { Navbar } from '../../../components/navbar';
import BlogCard from '../../../components/blog/card';
import { BlogPost } from '../../../model/blog';

const fetcher: Fetcher<BlogPost[]> = (url: string) => fetch(url).then((res) => res.json());

export default function Blog() {
  const { data: posts, error } = useSWR('/api/posts', fetcher);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center space-y-4">
        <div className="text-3xl">
          Pickup Blog
        </div>
        <div>
          <ul className="flex flex-col p-4 md:w-128 w-full space-y-4">
            {posts?.map((post) => {
              return <BlogCard post={post} key={post.slug} />;
            })}
          </ul>
        </div>
      </main>
    </>
  );
};
