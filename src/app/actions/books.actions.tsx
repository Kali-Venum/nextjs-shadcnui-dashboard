"use server";

export const getAllBooks = async (page: number, limit: number) => {
  const data = await fetch(
    `https://dummyjson.com/posts?page=${page}&limit=${limit}`
  );
  const posts = await data.json();

  // console.log(posts, "posts")

  return posts.posts;
};
