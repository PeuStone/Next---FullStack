import path from "path";
import fs from 'fs/promises'
import matter from 'gray-matter'

export interface PostProps {
  metadata: {
    date: string;
    url: string;
    excerpt: string;
    tags: string[];
  };
  image?: string
  slug: string;
  title: string;
  content: string;
}

export default function PostsServices() {
  return {
    async getAll(): Promise<PostProps[]> {
      const PATH_POSTS = path.resolve(".", "_data", "posts");
      const postFiles = await fs.readdir(PATH_POSTS, { encoding: 'utf-8' })
      const postsPromise = postFiles.map(async (postFileName) => {
        const filePath = path.join(PATH_POSTS, postFileName)
        const postFile = await fs.readFile(filePath, { encoding: "utf-8" });
        const { data, content } = matter(postFile)
        const post: PostProps = {
          metadata: {
            date: new Date( data.date).toISOString(),
            excerpt: data.excerpt,
            tags: data.tags,
            url: data.url,
          },
          image: data.image || "",
          title: data.title,
          slug: postFileName.replace(".md", ""),
          content,
        }

        return post
      });
      const posts = Promise.all(postsPromise)
      return posts;
    }
  }
}
