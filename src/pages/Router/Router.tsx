import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UserDetail from "../userDetailPage/UserDetail.tsx";
import SignUp from "../signUp/SignUp.tsx";
import HomePage from "../homePage/HomePage.tsx";
import { useAppSelector } from "../../app/hooks.ts";
import ErrorPage from "../errorPage/ErrorPage.tsx";
const Router = () => {
  const { isAuthenticated } = useAppSelector((state) => state.auth);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
      errorElement: <ErrorPage />,
    },
    { path: "signup", element: <SignUp /> },
    { path: "users", element: isAuthenticated ? <HomePage /> : <SignUp /> },
    {
      path: "users/:id",
      element: isAuthenticated ? <UserDetail /> : <SignUp />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
