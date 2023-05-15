import React from "react";
import { Routes, Route } from "react-router-dom";
import AllComponents from "./AllComponents";
import Blog1 from "./Blog1";
import Blog2 from "./Blog2";
import Blog3 from "./Blog3";
import NotFoundPage from "./NotFoundPage";
import Admin from "./Admin";
import Success from "../pages/success";
import Cancel from "../pages/cancel";
export default function AllRoutes() {
  return (
    <>
      <Routes>
        {/* admin */}

        <Route path="/admin" element={<Admin />} />
        {/* success and cancel  */}
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />

        {/* Home */}

        <Route path="/" element={<AllComponents />} />

        {/* Blog routes */}

        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />

        {/* All carts */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
