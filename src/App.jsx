import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import WeeklyPage from "./pages/WeeklyPage/WeeklyPage";
import HabitPage from "./pages/HabitPage/HabitPage";
import AddHabit from "./components/AddHabit/AddHabit";
import EditHabit from "./components/EditHabit/EditHabit";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/habit/:id" element={<HabitPage />} />
          <Route path="/weekly" element={<WeeklyPage />} />
          <Route path="/add" element={<AddHabit />} />
          <Route path="/edit/:id" element={<EditHabit />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
