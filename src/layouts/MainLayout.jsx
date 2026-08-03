import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/navbar/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
