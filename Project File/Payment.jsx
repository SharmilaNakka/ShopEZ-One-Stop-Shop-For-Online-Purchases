import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Payment.css";

function Payment() {
  const [method, setMethod] = useState("");
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");

  const handlePayment = () => {
    if (!method) {
      alert("Please select a payment method");
      return;
    }

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

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Select Payment Method</h2>

        <div
          className={`payment-option ${method === "card" ? "active" : ""}`}
          onClick={() => setMethod("card")}
        >
          💳 Credit / Debit Card
        </div>

        <div
          className={`payment-option ${method === "upi" ? "active" : ""}`}
          onClick={() => setMethod("upi")}
        >
          🟢 UPI (Google Pay / PhonePe)
        </div>

        <div
          className={`payment-option ${method === "netbanking" ? "active" : ""}`}
          onClick={() => setMethod("netbanking")}
        >
          🏦 Net Banking
        </div>

        <div
          className={`payment-option ${method === "cod" ? "active" : ""}`}
          onClick={() => setMethod("cod")}
        >
          💵 Cash on Delivery
        </div>

        <button className="pay-btn" onClick={handlePayment}>
          Pay Now
        </button>
      </div>
    </div>
  );
}

export default Payment;
