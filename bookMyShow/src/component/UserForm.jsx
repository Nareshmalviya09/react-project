import { useState } from "react";

const UserForm = ({ user, refresh }) => {
  const [data, setData] = useState(user);

  const handleUpdate = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    users = users.map(u => u.id === data.id ? data : u);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(data));
    refresh();
  };

  return (
    <div>
      <h3>Edit Profile</h3>
      <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} />
      <input value={data.email} onChange={e => setData({ ...data, email: e.target.value })} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
};

export default UserForm;
