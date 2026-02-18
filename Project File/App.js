import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminRoute from "./pages/AdminRoute"; // or components
import Cart from "./pages/Cart";
import AdminCarts from "./pages/admin/AdminCarts";
import NewProduct from "./pages/NewProduct";
import Payment from "./pages/Payment";
import ManageProducts from "./pages/ManageProducts";
import ManageUsers from "./pages/ManageUsers";
import ViewOrders from "./pages/ViewOrders";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route
  path="/admin"
  element={
    <AdminRoute>
      <AdminDashboard />
    </AdminRoute>
  }
  
/>
<Route path="/cart" element={<Cart />} />
<Route path="/admin/carts" element={<AdminCarts />} />
<Route path="/admin/new-product" element={<NewProduct />} />
<Route path="/payment" element={<Payment />} />
<Route path="/admin/manage-products" element={<ManageProducts />} />
<Route path="/admin/manage-users" element={<ManageUsers />} />
<Route path="/admin/view-orders" element={<ViewOrders />} />




        


      </Routes>
    </BrowserRouter>
  );
}
export default App;
