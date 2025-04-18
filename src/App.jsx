

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import DashBoardLayout from "./layout/DashBoardLayout";
import PagesLayout from "./layout/PagesLayout";
import Overview from "./pages/dashboard/Overview";
import Home from "./pages/user/Home";
import Budget from "./pages/dashboard/Budget";
import Expenses from "./pages/dashboard/Expenses";
import Income from "./pages/dashboard/Income";
import Settings from "./pages/dashboard/Settings";
import Wishlist from "./pages/dashboard/Wishlist";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AddExpense from "./pages/user/AddExpense";
import AddIncome from "./pages/user/AddIncome";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PagesLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="add-expense" element={<AddExpense />} />
          <Route path="add-income" element={<AddIncome />} />
          <Route index={true} element={<Home />} />
        </Route>

        <Route path="/dashboard" element={<DashBoardLayout />}>
          <Route index={true} element={<Overview />} />
          <Route path="budget" element={<Budget />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="income" element={<Income />} />
          <Route path="settings" element={<Settings />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
