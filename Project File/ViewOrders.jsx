import { useEffect, useState } from "react";

function ViewOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h2>All Orders</h2>

      {orders.map(order => (
        <div key={order._id}>
          <h4>User: {order.userId.username}</h4>
          <p>Total: ₹{order.totalAmount}</p>

          {order.products.map(p => (
            <div key={p.productId._id}>
              <img src={p.productId.image} width="60" />
              {p.productId.name} - Qty: {p.quantity}
            </div>
          ))}

          <hr />
        </div>
      ))}
    </div>
  );
}

export default ViewOrders;
