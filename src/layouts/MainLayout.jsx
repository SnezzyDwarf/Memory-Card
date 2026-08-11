import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

//css
import "./MainLayout.css";

export default function MainLayout() {
  const [highScore, setHighScore] = useState(0);

  function handleScore(newScore) {
    setHighScore(newScore);
  }

  return (
    <>
      <div className="main-layout">
        <header>
          <Navbar highScore={highScore} />
        </header>

        <main>
          <Outlet context={{ handleScore, highScore }} />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
