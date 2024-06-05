import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";
import Loading from "../shared/loading/Loading";
import "./layout.scss";

function Layout() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <Header />
          <div className="outlet">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}

export default Layout;
