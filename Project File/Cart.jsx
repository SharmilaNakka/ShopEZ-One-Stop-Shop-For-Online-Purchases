import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    fetch(`http://localhost:6001/api/cart/${userId}`)
      .then(res => res.json())
      .then(data => setCart(data))
      .catch(err => console.log(err));
  }, [userId]);

  const handleCheckout = () => {
    fetch(`http://localhost:6001/api/cart/checkout/${userId}`, {
      method: "POST"
    })
      .then(res => res.json())
      .then(() => {
        alert("Payment Successful 🎉");
        navigate("/");
      })
      .catch(err => console.log(err));
  };

  if (!cart || !cart.products || cart.products.length === 0)
    return <h2 style={{ padding: "40px" }}>Your cart is empty 🛒</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.products.map((item) => (
        <div key={item.productId._id} style={{
          background: "white",
          padding: "15px",
          marginBottom: "15px",
          borderRadius: "8px",
          boxShadow: "0 3px 8px rgba(0,0,0,0.1)"
        }}>
          <h4>{item.productId.name}</h4>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ₹{item.productId.price}</p>
        </div>
      ))}

      <button onClick={() => navigate("/payment")}

        style={{
          padding: "12px 20px",
          background: "green",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}
      >
        Proceed to Payment 💳
      </button>
    </div>
  );
}

export default Cart;
