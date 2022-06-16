import React from 'react';
import { BrowseRoute, Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";
import Contact from "../Contact/Contact";
import NoPage from "../Nopage/Nopage";

export default function Routing() {
    return (
        <div>
            <BrowseRoute>
                <Routes>
                    <Route path="/" element={<Home />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowseRoute>
        </div>
    )
}
