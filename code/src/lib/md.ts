import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../model/blog";
import { EventPost } from "../model/event";
import { promisify } from "util";

export function getPath(folder:string) {
    return path.join(process.cwd(), `/${folder}`);
}

export function getFileContent(filename:string, folder:string) {
    const postsPath = getPath(folder)
    return fs.readFileSync(path.join(postsPath, filename), "utf8");
};

export function getAllPosts(folder:string) {
    const postsPath = getPath(folder)

    return fs
        .readdirSync(postsPath)
        .filter((path) => {
            return /\.md$/.test(path)
        })
        .map((fileName) => {
            const source = getFileContent(fileName, folder);
            const slug = fileName.replace(/\.md$/, "");
            const { data, content } = matter(source);
            return {
                ...data,
                content: content,
                slug: slug,
            } as BlogPost
        })
        .sort((a, b) => {
            return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        });
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