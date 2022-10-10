import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../Blogs/Blogs";
import Home from "../Home/Home";
import Statistic from "../Statistic/Statistic";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/home",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
