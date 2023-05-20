import { join } from "path";
import fs from "fs";

const POSTS_PATH = join(process.cwd(), "blogs");

// get the file paths of all available list of posts
export function getPostsFilePaths(): string[] {
  console.log("fs.readdirSync(POSTS_PATH)", fs.readdirSync(POSTS_PATH));
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

export function getAllPosts(fields: string[]) {
  // add paths for getting all posts
  const filePaths = getPostsFilePaths();
  console.log("finepa", filePaths);
  // get the posts from the filepaths with the needed fields sorted by date
  // const posts = filePaths.map((filePath) => getPostItems(filePath,fields)).sort((post1,post2) => post1.date > post2.date ? 1 : -1);
  // return the available post
  return [];
  // return posts;
}
