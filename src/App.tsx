import "./App.css";
import PostsForm from "./components/PostsForm";
import PostsList from "./components/PostsList";
import UserForm from "./components/UserForm";
import { useUserStore } from "./store";

const App = () => {
  const { username, email } = useUserStore();

  return (
    <>
      <h1>Learning ZUSTAND</h1>
      <UserForm />
      <div>{username}</div>
      <div>{email}</div>
      <PostsForm />
      <PostsList />
    </>
  );
};

export default App;
