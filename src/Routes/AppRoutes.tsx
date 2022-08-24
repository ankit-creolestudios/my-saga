import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = React.lazy(() => import("../page/HomePage"));
const PostPage = React.lazy(() => import("../page/PostPage"));
const AboutPage = React.lazy(() => import("../page/AboutPage"));
const AppRoutes = () => {
  return (
    <div>
      App Routes
      <div>
        <>
          <Suspense>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/post" element={<PostPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </Suspense>
        </>
      </div>
    </div>
  );
};

export default AppRoutes;
