import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Skills from "./pages/skills/Skills";
import Projects from "./pages/projects/Projects";
import NotFound from "./pages/notFound/NotFound";

function Routing() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/skills",
          element: <Skills />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  const Elements = () => {
    return useRoutes(routes);
  };

  return (
    <>
      <BrowserRouter>
        <Elements />
      </BrowserRouter>
    </>
  );
}

export default Routing;
