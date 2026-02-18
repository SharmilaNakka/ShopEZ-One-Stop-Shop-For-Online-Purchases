import { useEffect, useState } from "react";

function ManageProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    fetch("http://localhost:6001/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:6001/api/products/${id}`, {
      method: "DELETE"
    })
      .then(() => fetchProducts());
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Manage Products</h2>

      {products.map(p => (
        <div key={p._id} style={{ marginBottom: "20px" }}>
          <img src={p.image} width="80" />
          <p>{p.name} - ₹{p.price}</p>
          <button onClick={() => handleDelete(p._id)}>
            Delete
          </button>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default ManageProducts;
