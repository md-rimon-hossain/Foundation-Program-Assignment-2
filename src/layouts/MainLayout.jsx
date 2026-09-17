import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MainLayout() {
  return (
    <div className="bg-[#141414] text-white font-sans selection:bg-indigo-500/30">
      <Header />
      <main className="min-h-[calc(100vh-5rem)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
