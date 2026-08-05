import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";
import Footer from "../components/layout/Footer/Footer";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
