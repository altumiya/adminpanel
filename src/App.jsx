import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from "./components/pages/common/login";
import Layout from "./components/pages/common/layout";

import Dashboard from "./components/pages/common/dashboard";
import ViewUser from "./components/pages/common/User";
import ContactEnquiry from './components/pages/common/ContactEnquiry';
import Newsletter from './components/pages/common/Newsletter';
import ViewColor from "./components/pages/common/ViewColor";
import AddColor from './components/pages/common/AddColor';
import ViewMaterial from "./components/pages/common/Viewmaterial";
import AddMaterial from "./components/pages/common/Addmaterial";
import AddCategory from './components/pages/common/AddCategory';
import ViewCategory from './components/pages/common/ViewCategory';
import AddSubCategory from './components/pages/common/AddSubCategory';
import ViewSubCategory from './components/pages/common/ViewSubCategory';
import AddSubSubCategory from './components/pages/common/AddSubSubCategory';
import ViewSubSubCategory from './components/pages/common/ViewSubSubCategory';
import ViewProduct from "./components/pages/common/ViewProduct";
import AddProduct from "./components/pages/common/AddProduct";
import AddWhyChooseUs from './components/pages/common/AddWhyChooseUs';
import ViewWhyChooseUs from './components/pages/common/ViewWhyChooseUs';
import Orders from "./components/pages/common/Order";
import ViewSlider from "./components/pages/common/ViewSlider";
import AddSlider from "./components/pages/common/AddSlider";
import ViewCountry from "./components/pages/common/ViewCountry";
import AddCountry from "./components/pages/common/AddCountry";
import ViewTestimonial from "./components/pages/common/ViewTestimonial";
import AddTestimonial from "./components/pages/common/AddTestimonial";
import AddFAQS from './components/pages/common/AddFAQ';
import ViewFAQS from './components/pages/common/ViewFAQ';
import Profile from "./components/pages/common/AdminProfile";
import CompanyProfile from "./components/pages/common/CompanyProfile";
import ProductDetails from "./components/pages/common/ProductDetails";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />

          <Route element={<Layout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/user" element={<ViewUser />} />

            <Route path="/enquiry">
              <Route path="contact" element={<ContactEnquiry />} />
              <Route path="newsletter" element={<Newsletter />} />
            </Route>

            <Route path="/color">
              <Route path="add" element={<AddColor />} />
              <Route path="edit-color/:id" element={<AddColor />} />
              <Route path="view" element={<ViewColor />} />
            </Route>

            <Route path="/material">
              <Route path="add" element={<AddMaterial />} />
              <Route path="edit-material/:id" element={<AddMaterial />} />
              <Route path="view" element={<ViewMaterial />} />
            </Route>

            <Route path="/category">
              <Route path="add" element={<AddCategory />} />
              <Route path="view" element={<ViewCategory />} />
              <Route path="edit-category/:id" element={<AddCategory />} />
              <Route path="subcategory">
                <Route path="add" element={<AddSubCategory />} />
                <Route path="view" element={<ViewSubCategory />} />
                <Route path="edit-subcategory/:id" element={<AddSubCategory />} />
              </Route>
              <Route path="subsubcategory">
                <Route path="add" element={<AddSubSubCategory />} />
                <Route path="view" element={<ViewSubSubCategory />} />
                <Route path="edit-subsubcategory/:id" element={<AddSubSubCategory />} />

              </Route>
            </Route>

            <Route path="/product">
              <Route path="add" element={<AddProduct />} />
              <Route path="view" element={<ViewProduct />} />
              <Route path="edit-product/:id" element={<AddProduct />} />

              <Route path="product-details/:id" element={<ProductDetails />} />
            </Route>

            <Route path="/why-choose-us">
              <Route path="add" element={<AddWhyChooseUs />} />
              <Route path="view" element={<ViewWhyChooseUs />} />
            </Route>

            <Route path="/orders">
              <Route path="view" element={<Orders />} />
            </Route>

            <Route path="/sliders">
              <Route path="add" element={<AddSlider />} />
              <Route path="view" element={<ViewSlider />} />
              <Route path="edit-slider/:id" element={<AddSlider />} />
            </Route>

            <Route path="/country">
              <Route path="add" element={<AddCountry />} />
              <Route path="edit-country/:id" element={<AddCountry />} />
              <Route path="view" element={<ViewCountry />} />
            </Route>

            <Route path="/testimonial/add" element={<AddTestimonial />} />
            <Route path="/testimonial/view" element={<ViewTestimonial />} />
            <Route path="/testimonial/edit-testimonial/:id" element={<AddTestimonial />} />

            <Route path="/faqs">
              <Route path="add" element={<AddFAQS />} />
              <Route path="edit-faq/:id" element={<AddFAQS />} />
              <Route path="view" element={<ViewFAQS />} />
            </Route>

            <Route path="/profile" element={<Profile />} />
            <Route path="/company-profile" element={<CompanyProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}