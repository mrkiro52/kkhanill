import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Politics from "./pages/Politics/Politics";
import Offerta from "./pages/Offerta/Offerta";
import CourseContent from "./pages/CourseContent/CourseContent";
import Success from "./pages/Success/Success";
import Fail from "./pages/Fail/Fail";
import Presale from "./pages/Presale/Presale";
import './fonts.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/course" element={<CourseContent />} />
        <Route path="/presale" element={<Presale />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/public-offer" element={<Offerta />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
}
