import { PostProps } from "../types/definition";

const PostCard = ({ title, body }: PostProps) => {
  return (
    <div>
      <p>PostCard Component</p>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;
