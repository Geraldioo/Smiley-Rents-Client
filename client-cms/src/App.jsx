import './style/App.css'

import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LoginPage from "../pages/loginPage";
// import { useEffect, useState } from "react";
import MainLayout from "../components/mainLayout";
import HomePage from "../pages/homePage";
import MainPage from '../pages/mainPage';
import AddPage from '../pages/addPage';
import EditPage from '../pages/editPage';


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
  {
    element: <MainLayout />,
    loader: () => {
      if (localStorage.access_token) {
        return null
      }
      return redirect("/login");
    },
    children: [
      {
        path: "/lodgings",
        element: <MainPage />,
      },
      {
        path: "/lodgings/add",
        element: <AddPage />,
      },
      {
        path: "/lodgings/:id",
        element: <EditPage />,
      },
      // {
      //   // delete
      //   path: "/lodgings/:id",
      //   element: <HomePage />,
      // },
      // {
      //   path: "/types",
      //   element: <TypePage />,
      // },
      // {
      //   path: "/types",
      //   element: <AddTypePage />,
      // },
      // {
      //   path: "/types/:id",
      //   element: <EditTypePage />,
      // },
      // {
      //   // delete
      //   path: "/types/:id",
      //   element: <TypePage />,
      // }
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) {
        return redirect("/lodgings");
      }
      return null;
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
