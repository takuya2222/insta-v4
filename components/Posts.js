import React from "react";
import Post from "./Post";

export default function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImg:
        "https://thumb.ac-illust.com/53/53fc958478b1241da0180a5681338a1b_t.jpeg",
      img: "https://unsplash.com/ja/%E5%86%99%E7%9C%9F/75aKwQ9Z1Lg",
      caption: "Nice picture",
    },
    {
      id: "2",
      username: "takuya",
      userImg:
        "https://thumb.ac-illust.com/53/53fc958478b1241da0180a5681338a1b_t.jpeg",
      img: "https://unsplash.com/ja/%E5%86%99%E7%9C%9F/cFkg3uxK9CQ",
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
