import React from "react";
import { Route, Routes } from "react-router-dom";
import FinalOrder from "../Components/Pages/FinalOrder";
import FoodMenu from "../Components/Pages/FoodMenu/Optimized";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<FoodMenu />} />
      <Route path="/finalorder" element={<FinalOrder />} />
    </Routes>
  );
};

export default AllRoutes;
