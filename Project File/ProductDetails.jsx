import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6001/api/products")
      .then(res => res.json())
      .then(data => {
        const selectedProduct = data.find(p => p._id === id);
        setProduct(selectedProduct);
      })
      .catch(err => console.log(err));
  }, [id]);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart 🛒");
  };

  if (!product) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "40px" }}>
      <img src={product.image} alt={product.name} width="300" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>₹{product.price}</h3>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
}

export default ProductDetails;
