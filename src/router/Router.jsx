import { Component } from "react";
import HomeLayout from "../layout/HomeLayout";
import App from "../App";
import { createBrowserRouter } from "react-router";
import Login from "../components/Login";
import Register from "../components/Register";

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
