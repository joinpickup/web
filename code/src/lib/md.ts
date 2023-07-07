import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost } from "../model/blog";
import { EventPost } from "../model/event";

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

export function getAllEvents(folder:string) {
    const eventsPath = getPath(folder)

    return fs
        .readdirSync(eventsPath)
        .filter((path) => {
            return /\.md$/.test(path)
        })
        .map((fileName) => {
            const source = getFileContent(fileName, folder);
            const slug = fileName.replace(/\.md$/, "");
            const { data, content } = matter(source);
            return {
                ...data,
                slug: slug,
                content: content,
            } as EventPost
        })
        .sort((a, b) => {
            return new Date(a.eventDate).getTime() - new Date(b.eventDate).getTime()
        });
};