import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetail from "../userDetailPage/UserDetail.tsx";
import SignUp from "../signUp/SignUp.tsx";
import HomePage from "../homePage/HomePage.tsx";
import ErrorPage from "../errorPage/ErrorPage.tsx";
import PrivateRoute from "./PrivateRoute.tsx"

const Router = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    { path: "signup", element: <SignUp /> },
    { path: "users", element: <PrivateRoute element={<HomePage />} /> },
    {
      path: "users/:id",
      element: <PrivateRoute element={<UserDetail />} />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
