import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";

function ProductsList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:6001/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  // ✅ ADD TO CART FUNCTION
  const handleAddToCart = (e, productId) => {
    e.stopPropagation(); // prevent card click navigation

    const userId = localStorage.getItem("userId");

    if (!userId) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    fetch("http://localhost:6001/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userId,
        productId
      })
    })
      .then(res => res.json())
      .then(() => alert("Added to cart 🛒"))
      .catch(err => console.log(err));
  };

  return (
    <div className="products-container">
      <h2 className="products-title">🌟 Explore Our Products 🛒</h2>

      <div className="products-grid">
        {products.map((item) => (
          <div
            key={item._id}
            className="product-card"
            onClick={() => navigate(`/product/${item._id}`)}
          >
            <img
              src={item.image || "https://via.placeholder.com/250"}
              alt={item.name}
            />

            <div className="product-info">
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>

              <button
                onClick={(e) => handleAddToCart(e, item._id)}
              >
                Add to Cart
              </button>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsList;
