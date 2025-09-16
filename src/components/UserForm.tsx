import { useUserStore } from "../store";

const UserForm = () => {
  const { username, email, setUsername, setEmail } = useUserStore();
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="John Doe"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="john.doe@example.com"
        />
      </div>
    </>
  );
};

export default UserForm;
