import {Client} from "@notionhq/client"
import { BlogPost } from "../model/blog";


const notion = new Client({
  auth: process.env.NOTION_ACCESS_TOKEN
})

export const getDatabase = async (databaseId: string) => {
  const response = await notion.databases.query({
    database_id: databaseId,
  });

  return response.results;
};

export const getPage = async (pageId: string) => {
    const response = await notion.pages.retrieve({ page_id: pageId });
    return response;
  };

export const getBlocks = async (blockId: string) => {
  const response = await notion.blocks.children.list({
    block_id: blockId,
    page_size: 50,
  });
  return response.results;
};

export const getBlogPosts = async () => {
  const database = await getDatabase(process.env.NOTION_PAGE_ID as string)

  let blogPosts:BlogPost[] = []

  for (let page of database) {
    if (
         (((page as any).properties.Author as any).people[0]?.id)
      && ((page as any).properties["Actual Publish Date"] as any)?.date?.start
      && ((page as any).properties.Status as any)?.status?.name == "Published"
    ) {
      blogPosts.push({
          id: page.id,
          title: ((page as any).properties.Name as any).title[0]?.plain_text,
          author: (((page as any).properties.Author as any).people[0]?.id),
          slug: ((page as any).properties.Slug as any).rich_text[0]?.plain_text,
          published: ((page as any).properties["Actual Publish Date"] as any)?.date?.start,
          tags: [],
      })
    }

  }
  return blogPosts
}
