export interface BlogPost {
  author: string;
  title: string;
  isPublished: boolean;
  publishedDate: Date;
  slug: string;
  tags: string[];
  description: string;
  content: string;
}
