import { useEffect, useState } from "react";
import "./App.css";
import Boxes from "./components/Boxes";
import Contac from "./components/Contac";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Space from "./components/Space";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className="App font-['Akshar'] bg-[#0F103F] min-h-screen  dark:bg-white/90">
      <img
        className="absolute w-[250px] mt-10 "
        src="/images/Ellipse10.png"
        alt=""
      />
      <Navbar setIsDark={setIsDark} />
      <img
        className="absolute w-[250px] right-10 "
        src="/images/Ellipse10.png"
        alt=""
      />
      <Header />
      <img
        className="absolute w-[250px] mt-10 "
        src="/images/Ellipse10.png"
        alt=""
      />
      <Boxes />
      <img
        className="absolute w-[250px] right-0 z-20 "
        src="/images/Ellipse10.png"
        alt=""
      />
      <Space />
      <Contac />
      <Footer />
    </div>
  );
}

export default App;
