import "./App.css";
import Foot from "./components/reusableComponent/Foot";
import Footer from "./components/reusableComponent/Footer";
import Hero from "./components/reusableComponent/Hero";
import Navbar from "./components/reusableComponent/Navbar";
import Subfooter from "./components/reusableComponent/Subfooter";
import Home from "./pages/Home";

function App() {
  return (
    <div className="bg-[#0F1320]">
      <Hero />
      <Home />
      <Subfooter />
      <Footer />
      {/* <Foot /> */}
    </div>
  );
}

export default App;
