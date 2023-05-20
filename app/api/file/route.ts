import { join } from "path";
import fs from "fs";
import { NextResponse } from "next/server";

// 参考： https://www.section.io/engineering-education/static-nextjs-markdown-blog-typescript-mdx-tailwindcss/

const POSTS_PATH = join(process.cwd(), "blogs");

export async function GET(request: Request) {
  // console.log("post", POSTS_PATH, getPostsFilePaths());
  getAllPosts([]);
  return NextResponse.json({ hello: "Next.js" });
}

// 获取所有路径
function getPostsFilePaths() {
  return fs.readdirSync(POSTS_PATH).filter((path) => /\.mdx?$/.test(path));
}

// 获取所有文章
function getAllPosts(fields: string[]) {
  const filePaths = getPostsFilePaths();
  const posts = filePaths
    .map((filePath) => getPostItems(filePath, fields))
    // .sort((post1, post2) => (post1.date > post2.date ? 1 : -1));
  return posts;
}

export function getPostItems(filePath: string, fields: string[] = []) {
  // create a slug from the mdx file location
  const slug = filePath.replace(/\.mdx?$/, "");
  const { data, content }: any = getPost(slug);

  const items = {};

  // just load and include the content needed
  fields.forEach((field) => {
    // load the slug
    if (field === "slug") {
      items[field] = slug;
    }
    // load the post content
    if (field === "content") {
      items[field] = content;
    }
    // check if the above specified field exists on data
    if (data[field]) {
      // verify the fileds has data
      items[field] = data[field];
    }
  });
  // return the post items
  return items;
}

export function getPost(slug: string) {
  // add path/location to a single post
  const fullPath = join(POSTS_PATH, `${slug}.mdx`);
  // post's content
  const fileContents = fs.readFileSync(fullPath, "utf-8");
  console.log("file", { fileContents });
  // get the front matter data and content
  // const {data,content} = matter(fileContents);
  // return the front matter data and content
  // return { data,content};
  return {};
}
