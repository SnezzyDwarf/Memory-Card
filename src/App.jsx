import { Route, Routes } from "react-router-dom";

//Layouts
import MainLayout from "./layouts/MainLayout";

//Pages
import Game from "./pages/Game/Game";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}
