import {RouterProvider, createBrowserRouter} from "react-router-dom"
import { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
// import data from "../data/lodging.json";
import HomePage from "../pages/homePage";
import DetailPage from "../pages/detailPage";
import LoginPage from "../pages/login";
import MainLayout from "../components/mainLayout";


function App() {
  // const [page, setPage] = useState("home");

  // const changePage = (page, lodging) => {
  //   setPage(page);
  //   setSingleData(lodging)
  // };

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/pub/lodgings",
          element: <HomePage />
        },
        {
          path: "/pub/lodgings/:id",
          element: <DetailPage />
        }
      ]
    }
  ])


  // useEffect(() => {
  //   console.log(localStorage, "<<<< INI L STRG");
  //   if (localStorage.access_token) {
  //     changePage("home")
  //   }
  // }, [])

  return <RouterProvider router={router} />
}

export default App;
