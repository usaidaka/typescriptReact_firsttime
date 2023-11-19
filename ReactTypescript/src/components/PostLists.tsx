import { PostProps } from "../types/definition";
import ChildOne from "./ChildOne";
import ParentOne from "./ParentOne";
import PostCard from "./PostCard";
import { useEffect, useState } from "react";

const PostLists = () => {
  const [data, setData] = useState<PostProps[]>([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setData(await res.json());
    }
    getData();
  }, []);

  return (
    <div>
      <ParentOne>
        <ChildOne />
      </ParentOne>
      {data.map((post: PostProps) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </div>
  );
};

export default PostLists;
