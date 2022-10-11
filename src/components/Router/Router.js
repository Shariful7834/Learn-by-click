import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blogs from "../Blogs/Blogs";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../Home/Home";
import Quizs from "../Quizs/Quizs";
import Statistic from "../Statistic/Statistic";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/course/:courseId",
        loader: async ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.courseId}`
          ),
        element: <Quizs></Quizs>,
      },
      {
        path: "/statistic",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Statistic></Statistic>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
    ],
  },
]);
