import "./Home.css";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

function Home() {
  const navigate = useNavigate();

  const heroSlides = [
    {
      image:
        "https://img.freepik.com/premium-vector/vector-electronics-mega-sale-instagram-banner-social-media-post-template_958026-67.jpg",
      title: "Mega Electronics Sale",
    },
    {
      image:
        "https://t3.ftcdn.net/jpg/01/38/94/62/360_F_138946263_EtW7xPuHRJSfyl4rU2WeWmApJFYM0B84.jpg",
      title: "Latest Fashion Collection",
    },
    {
      image:
        "https://png.pngtree.com/background/20230615/original/pngtree-makeup-products-and-products-are-laid-out-picture-image_3545789.jpg",
      title: "Beauty Essentials",
    },
  ];

  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const categories = [
    { name: "Mobiles", image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48" },
    { name: "Beauty", image: "https://media.glamourmagazine.co.uk/photos/6138938a8cb9467036e0e65d/16:9/w_2560%2Cc_limit/gettyimages-942952390_sf.jpg" },
    { name: "Fashion", image: "https://content.api.news/v3/images/bin/0cc6d56a4ddbb01710c36e3b573ac57e" },
    { name: "Electronics", image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "Groceries", image: "https://images.unsplash.com/photo-1542838132-92c53300491e" },
  ];

  const products = [
    { name: "iPhone 15", price: 79999, image: "https://easyphones.co.in/cdn/shop/files/Apple_iPhone_15_Pro_Max_-_Refurbished_Black.png?v=1755515079&width=1445" },
    { name: "Nike Shoes", price: 4999, image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff" },
    { name: "Smart Watch", price: 2999, image: "https://gourban.in/cdn/shop/files/Pulse.jpg" },
    { name: "Laptop", price: 55999, image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { name: "Washing Machine", price: 45999, image: "https://www.sathya.store/img/product/S6dYbz6VeXOMn5O8.png" },
  ];

  return (
    <div>

      {/* HEADER */}
      <div className="top-navbar">
        <div className="logo" onClick={() => navigate("/")}>
          ShopEZ
        </div>

        <div className="search-bar">
          <input placeholder="Search ShopEZ..." />
          <button>🔍</button>
        </div>

        <div className="nav-item" onClick={() => navigate("/login")}>
          Sign In
        </div>

        <div
          className="nav-item"
          onClick={() => navigate("/products")}
        >
          Products
        </div>

        {/* ✅ UPDATED CART BUTTON */}
        <div
          className="nav-item"
          onClick={() => navigate("/cart")}
        >
          🛒 Cart
        </div>
      </div>

      {/* HERO */}
      <div className="hero-carousel">
        <Slider {...heroSettings}>
          {heroSlides.map((slide, index) => (
            <div key={index} className="hero-slide">
              <img src={slide.image} alt={slide.title} />
              <div className="hero-text">
                <h2>{slide.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* CATEGORY */}
      <div className="category-section">
        <h2>Shop by Category</h2>
        <div className="category-grid">
          {categories.map((cat, index) => (
            <div key={index} className="category-card">
              <img src={cat.image} alt={cat.name} />
              <h3>{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="product-section">
        <h2 className="white-text">Trending Products</h2>

        <div className="product-grid">
          {products.map((item, index) => (
            <div key={index} className="product-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>
              <button onClick={() => navigate("/products")}>
                View Product
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">
        © 2026 ShopEZ. All rights reserved.
      </div>

    </div>
  );
}

export default Home;
