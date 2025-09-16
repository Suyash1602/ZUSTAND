import { useState } from "react";
import { usePostStore } from "../store";

const PostsForm = () => {
  const { addPost } = usePostStore();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postIdCounter, setPostIdCounter] = useState(0);

  return (
    <>
      <div
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
          maxWidth: "600px",
          margin: "20px auto",
        }}
      >
        <div style={{ marginBottom: "15px" }}>
          <b>Create New Post</b>
        </div>
        <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            style={{
              flex: 1,
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          onClick={() => {
            addPost({ title, content, id: postIdCounter.toString() });
            setPostIdCounter((prev) => prev + 1);
            setTitle("");
            setContent("");
          }}
          style={{
            padding: "8px 16px",
            fontSize: "14px",
            cursor: "pointer",
            borderRadius: "4px",
            border: "none",
            backgroundColor: "#007BFF",
            color: "white",
          }}
        >
          Add Post
        </button>
      </div>
    </>
  );
};

export default PostsForm;
