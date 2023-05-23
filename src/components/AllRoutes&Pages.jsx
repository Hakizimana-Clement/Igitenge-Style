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
        <Route path="/admin" element={<Admin />} />
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
        <Route path="/" element={<AllComponents />} />
        <Route path="/blog-1" element={<Blog1 />} />
        <Route path="/blog-2" element={<Blog2 />} />
        <Route path="/blog-3" element={<Blog3 />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
