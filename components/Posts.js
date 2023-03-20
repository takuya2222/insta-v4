import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg:
        "https://thumb.ac-illust.com/53/53fc958478b1241da0180a5681338a1b_t.jpeg",
      img: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "takuya",
      userImg:
        "https://thumb.ac-illust.com/53/53fc958478b1241da0180a5681338a1b_t.jpeg",
      img: "https://images.unsplash.com/photo-1619050405558-b5f39da6eef8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      caption: "New picture from my city",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}
