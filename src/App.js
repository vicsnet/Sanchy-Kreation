import "./App.css";
import Footer from "./components/reusableComponent/Footer";
import Hero from "./components/reusableComponent/Hero";
import Navbar from "./components/reusableComponent/Navbar";
import Subfooter from "./components/reusableComponent/Subfooter";
import Home from "./pages/Home";

function App() {
  return <div>
    
    <Hero />
    <Home />
    <Subfooter />
    <Footer />
  </div>;
}

export default App;
