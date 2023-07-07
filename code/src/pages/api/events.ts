import path from 'path';
import { promises as fs } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEvents } from '../../lib/md';
import { EventPost } from '../../model/event';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const events: EventPost[] = await getAllEvents()

    if (req.query.slug) {
        // we should only have one here
        const event = events.filter(event => event.slug === req.query.slug);
        return res.status(200).json(event[0])
    }
  
    res.status(200).json(events)
  }