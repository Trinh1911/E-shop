import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage, HomePage, ProductsPage, BestSellingPage, OderSuccessPage, ProductsDetailsPage, ProfilePage } from "./Routes.js"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/order/success/:id" element={<OderSuccessPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/product/:name" element={<ProductsDetailsPage />} />
                <Route path="/best-selling" element={<BestSellingPage />} />
                <Route path="/profile" element={<ProfilePage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;