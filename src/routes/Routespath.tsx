import About from "@/pages/About";
import Home from "@/pages/Home";
import Layout from "@/rootLayout/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
        path: "/about-us",
        element: <About />,
      },
    ],
  },
];

const Routespath = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default Routespath;
