import "bootstrap/dist/css/bootstrap.min.css";
import "./helpers/assests/Css/common.css";
// React Slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-modern-drawer/dist/index.css";
import "antd/dist/antd.css";
import HomePage from "./components/HomePage/HomePage";
import Listing from "./components/ProductListing/Listing";
import Productview from "./components/ProductView/ProductView";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyCart from "./components/CartPage/MyCart";

import LoginImage from "./components/LoginPage/LoginImage";
import LoginMobile from "./components/LoginPage/section/LoginMobile";
import LoginOtp from "./components/LoginPage/section/LoginOtp";
import LoginForm from "./components/LoginPage/section/LoginForm";
import Shipping from "./components/ShippingPage/Shipping";
import Billing from "./components/BillingPage/Billing";
import Steppers from "./components/Stepper/Steppers";
import OurBrands from "./components/OurBrands/OurBrands";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Productview" element={<Productview />} />
          <Route path="/Cart" element={<MyCart />} />
          <Route path="/loginmobile" element={<LoginImage />} />
          <Route path="/shipping" element={<Steppers />} />
          <Route path="/brands" element={<OurBrands/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
