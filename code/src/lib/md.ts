import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../model/blog";
import { EventPost } from "../model/event";
import { promisify } from "util";

export async function getAllPosts() {
    const eventsDir = path.join(process.cwd(), '/content/posts');

    //Read the json data file data.json
    const fileNames = await promisify(fs.readdir)(eventsDir, "utf-8");
    const mdFileNames = fileNames.filter((path) => {
        return /\.md$/.test(path)
    })

    const posts: BlogPost[] = []
    for (let mdFileName of mdFileNames) {
        const filePath = path.join(eventsDir, mdFileName)
        const source = await promisify(fs.readFile)(filePath, 'utf-8')
        const slug = mdFileName.replace(/\.md$/, "");
        const { data, content } = matter(source);
        const post = {
            ...data,
            content: content,
            slug: slug,
        } as BlogPost

        posts.push(post)
    }

    const sortedPosts = posts.sort((a, b) => {
        return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
    });

    return sortedPosts;
};

export async function getAllEvents() {
    const eventsDir = path.join(process.cwd(), '/content/events');

    //Read the json data file data.json
    const fileNames = await promisify(fs.readdir)(eventsDir, "utf-8");
    const mdFileNames = fileNames.filter((path) => {
        return /\.md$/.test(path)
    })

    const events: EventPost[] = []
    for (let mdFileName of mdFileNames) {
        const filePath = path.join(eventsDir, mdFileName)
        const source = await promisify(fs.readFile)(filePath, 'utf-8')
        const slug = mdFileName.replace(/\.md$/, "");
        const { data, content } = matter(source);
        const event = {
            ...data,
            slug: slug,
            content: content,
        } as EventPost

        events.push(event)
    }

    return events;
};