import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiResponse } from 'next';
import { getAllPosts } from '../../lib/md';

export default async function handler(req: NextRequest, res: NextResponse) {
  //Find the absolute path of the json directory
  const posts = getAllPosts('/content/posts')
  //Read the json data file data.json
  //Return the content of the data file in json format

  NextResponse.json(posts)
}