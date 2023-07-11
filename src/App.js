import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage, HomePage,ProductsPage } from "./Routes.js"
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route path="/products" element={<ProductsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App;