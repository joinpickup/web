import {NextPage} from "next";
import {getDatabase} from "../../lib/notion";
import {Navbar} from "../index";

export async function getServerSideProps() {
  const database = await getDatabase(process.env.NOTION_PAGE_ID as string)
  console.log()

  return {
    props: {
      posts: database,
    }
  }
}

const Blog: NextPage = ({ posts }: any) => {
  return (
    <>
      <Navbar />
      <main className="container mx-auto flex min-h-screen flex-col p-4 space-y-4">
        <div className="flex flex-col justify-center items-center w-full space-y-4">
        </div>
      </main>
    </>
  )
}

export default Blog;
