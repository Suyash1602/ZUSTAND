import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface UserStore {
  username: string;
  setUsername: (username: string) => void;
  email: string;
  setEmail: (email: string) => void;
}

export const useUserStore = create(
  // Wrap the store logic with devtools
  devtools<UserStore>(
    (set) => ({
      username: "",
      setUsername: (username: string) => set({ username }),
      email: "",
      setEmail: (email: string) => set({ email }),
    }),
    { name: "user", store: "user" }
  )
);

export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostsStore {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  removePost: (id: string) => void;
}

export const usePostStore = create(
  devtools<PostsStore>(
    (set) => ({
      posts: [],
      setPosts: (posts: Post[]) => set(() => ({ posts })),
      addPost: (post: Post) =>
        set((state) => ({
          posts: [...state.posts, post],
        })),
      removePost: (id: string) =>
        set((state) => ({
          posts: state.posts.filter((post) => post.id !== id),
        })),
    }),
    { name: "posts", store: "posts" }
  )
);
