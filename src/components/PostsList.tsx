import { usePostStore } from "../store";

const PostsList = () => {
  const { posts, removePost } = usePostStore();
  if (posts.length <= 0) return <p>No posts add some</p>;
  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "2px solid white",
            margin: "3px",
            borderRadius: "15px",
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <button onClick={() => removePost(post.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default PostsList;
