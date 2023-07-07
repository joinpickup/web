import { NextApiRequest, NextApiResponse } from 'next';
import { getAllPosts } from '../../lib/md';
import { BlogPost } from '../../model/blog';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const posts: BlogPost[] = await getAllPosts()

    if (req.query.slug) {
        // we should only have one here
        const post = posts.filter(post => post.slug === req.query.slug);
        return res.status(200).json(post[0])
    }
  
    res.status(200).json(posts)
}