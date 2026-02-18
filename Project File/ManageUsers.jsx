import { useEffect, useState } from "react";

function ManageUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch("http://localhost:6001/api/auth/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/api/auth/users/${id}`, {
      method: "DELETE"
    })
      .then(() => fetchUsers());
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Manage Users</h2>

      {users.map(u => (
        <div key={u._id}>
          <p>{u.username}</p>
          <button onClick={() => handleDelete(u._id)}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ManageUsers;
