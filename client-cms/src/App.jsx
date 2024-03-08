import './style/App.css'

import {
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import LoginPage from "../pages/loginPage";
// import { useEffect, useState } from "react";
import MainLayout from "../components/mainLayout";
import MainPage from '../pages/mainPage';
import AddPage from '../pages/addPage';
import EditPage from '../pages/editPage';
import AddUser from '../pages/addUser';
import TypePage from '../pages/typePage';


const router = createBrowserRouter([
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
        path: "/",
        element: <MainPage />,
      },
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
      {
        path: "/add-user",
        element: <AddUser />
      },
      {
        path: "/types",
        element: <TypePage />,
      },
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
