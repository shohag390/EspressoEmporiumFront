import { Component } from "react";
import HomeLayout from "../layout/HomeLayout";
import App from "../App";
import { createBrowserRouter } from "react-router";
import Login from "../components/Login";
import Register from "../components/Register";
import About from "../pages/About";
import Manu from "../pages/Manu";
import ContactsPage from "../pages/ContactsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: HomeLayout,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/coffees",
        Component: Manu,
      },
      {
        path: "/contact",
        Component: ContactsPage,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
]);
