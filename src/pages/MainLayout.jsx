import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function MainLayout() {
  return (
    <main className="container max-w-[1280px] mx-auto">
      <Header />
      <Outlet />
    </main>
  );
}

export default MainLayout;
