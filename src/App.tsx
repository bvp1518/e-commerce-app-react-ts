import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayOut } from "./Layout/AppLayout";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
import { Contact } from "./pages/contact/Contact";
import { SignUp } from "./pages/signup/SignUp";
import { ErrorPage } from "./pages/errorPage/ErrorPage";
import "./App.css";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/signup",
          element: <SignUp />,
        },       
      ],
    },
  ]);

 return(
  <RouterProvider router={router}></RouterProvider>
 )

};

export default App;
