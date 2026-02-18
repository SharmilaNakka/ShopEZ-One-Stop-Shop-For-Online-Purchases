import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalUsers: 0
  });

  useEffect(() => {
    const user = localStorage.getItem("username");
    if (user) {
      setUsername(user);
    }

    // Fetch Real Stats
    fetch("http://localhost:6001/api/admin/stats")
      .then(res => res.json())
      .then(data => setStats(data))
      .catch(err => console.log(err));

  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-container">

      {/* ===== SIDEBAR ===== */}
      <div className="sidebar">
        <h2>ShopEZ Admin 👑</h2>

        <ul>
          <li onClick={() => navigate("/admin")}>
            Dashboard
          </li>

          <li onClick={() => navigate("/admin/new-product")}>
            Add New Product
          </li>

          <li onClick={() => navigate("/admin/manage-products")}>
            Manage Products
          </li>

          <li onClick={() => navigate("/admin/view-orders")}>
            View Orders
          </li>

          <li onClick={() => navigate("/admin/manage-users")}>
            Manage Users
          </li>

          <li onClick={() => navigate("/admin/carts")}>
            View Carts
          </li>

          <li onClick={() => navigate("/")}>
            Go to Home
          </li>
        </ul>
      </div>

      {/* ===== MAIN CONTENT ===== */}
      <div className="admin-main">

        <div className="admin-header">
          <h1>Dashboard</h1>
          <div>
            <span style={{ marginRight: "15px" }}>
              Welcome, {username}
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        <div className="dashboard-cards">

          <div className="card">
            <h3>📦 Total Products</h3>
            <p>{stats.totalProducts}</p>
          </div>

          <div className="card">
            <h3>🛒 Total Orders</h3>
            <p>{stats.totalOrders}</p>
          </div>

          <div className="card">
            <h3>👥 Total Users</h3>
            <p>{stats.totalUsers}</p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default AdminDashboard;
