import "./App.css";
import Foot from "./components/reusableComponent/Foot";
import Footer from "./components/reusableComponent/Footer";
import Hero from "./components/reusableComponent/Hero";
import Navbar from "./components/reusableComponent/Navbar";
import Subfooter from "./components/reusableComponent/Subfooter";
import About from "./pages/About";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="bg-[#0F1320]">
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
     
      <Footer />
      {/* <Foot /> */}
    </div>
  );
}

export default App;
