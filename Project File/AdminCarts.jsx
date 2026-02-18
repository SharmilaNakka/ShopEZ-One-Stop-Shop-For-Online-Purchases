import { useEffect, useState } from "react";
import "./AdminCarts.css";

function AdminCarts() {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/api/cart")
      .then(res => res.json())
      .then(data => setCarts(data));
  }, []);

  return (
    <div className="admin-cart-container">
      <h2>All User Carts</h2>

      {carts.map(cart => (
        <div key={cart._id} className="admin-user-cart">
          <h3>User: {cart.userId?.username}</h3>

          {cart.products.map(p => (
            <div key={p.productId._id} className="admin-cart-card">
              <img
                src={p.productId.image}
                alt={p.productId.name}
              />

              <div>
                <p><strong>{p.productId.name}</strong></p>
                <p>Price: ₹{p.productId.price}</p>
                <p>Qty: {p.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default AdminCarts;
