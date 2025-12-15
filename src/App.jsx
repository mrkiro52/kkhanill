import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studio from "./pages/Studio/Studio";
import MyCourse from "./pages/MyCourse/MyCourse";
import CaseDetail from "./pages/CaseDetail/CaseDetail";
import Articles from "./pages/Articles/Articles";
import ArticleDetail from "./pages/ArticleDetail/ArticleDetail";
import Politics from "./pages/Politics/Politics";
import Offerta from "./pages/Offerta/Offerta";
import CourseContent from "./pages/CourseContent/CourseContent";
import Success from "./pages/Success/Success";
import Fail from "./pages/Fail/Fail";
import Header from "./components/Header/Header";
import './fonts.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes> 
        <Route path="/" element={<Studio />} />
        <Route path="/mycourse" element={<MyCourse />} />
        <Route path="/cases/:id" element={<CaseDetail />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/course" element={<CourseContent />} />
        <Route path="/politics" element={<Politics />} />
        <Route path="/public-offer" element={<Offerta />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </BrowserRouter>
  );
}
