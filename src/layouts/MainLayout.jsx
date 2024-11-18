import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function MainLayout() {
  return (
    <>
      <Nav />
      {/* dinamic routes here */}
      <div className="min-h-[313px]">
        <Outlet />
      </div>
      <Footer />
      {/* react hot toast component */}
      <Toaster position="top-right" />
    </>
  );
}

export default MainLayout;
