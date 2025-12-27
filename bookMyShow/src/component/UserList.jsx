const UserList = ({ refresh }) => {

  const handleDelete = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    const loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));

    users = users.filter(u => u.id !== loggedUser.id);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.removeItem("loggedInUser");
    refresh(true);
  };

  return <button onClick={handleDelete}>Delete Account</button>;
};

export default UserList;
