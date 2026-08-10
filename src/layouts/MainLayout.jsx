import { Outlet } from "react-router-dom";
import { useState } from "react";

import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default function MainLayout() {
  const [highScore, setHighScore] = useState(0);

  function handleScore() {
    setHighScore((prev) => prev + 1);
  }

  return (
    <>
      <Navbar highScore={highScore} />
      <main>
        <Outlet context={{ handleScore }} />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
