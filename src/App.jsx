import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  // theme state
  const [theme, setTheme] = useState("light");

  // toggle function
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
  <div className={theme}>
    <div className="app-container">
      <Navbar />
      <Hero />
      <Footer />
    </div>

    <button className="theme-toggle" onClick={toggleTheme}>
      {theme === "light" ? "🌙" : "🌞"}
    </button>
  </div>
);

}

export default App;
