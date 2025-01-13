import Header from "./components/Header/Header";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import WeeklyPage from "./pages/WeeklyPage/WeeklyPage";
import HabitPage from "./pages/HabitPage/HabitPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habit" element={<HabitPage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
