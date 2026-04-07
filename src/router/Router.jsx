import { Component } from "react";
import HomeLayout from "../layout/HomeLayout";
import App from "../App";
import { createBrowserRouter } from "react-router";
import About from "../pages/About";
import Manu from "../pages/Manu";
import ContactsPage from "../pages/ContactsPage";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import Dashboard from "../layout/Dashboard";
import AddCoffee from "../components/Dashboard/AddCoffee";
import DashboardHome from "../components/Dashboard/DashboardHome";
import Profile from "../components/Dashboard/Profile";
import MyCoffees from "../components/Dashboard/MyCoffees";
import UpdateCoffee from "../components/Dashboard/UpdateCoffee";
import AllCoffees from "../components/Dashboard/AllCoffees";
import CoffeeInfo from "../components/Products/CoffeeInfo";

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
        path: "/coffee/:id",
        Component: CoffeeInfo,
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
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        index: true,
        Component: DashboardHome,
      },
      {
        path: "profile",
        Component: Profile,
      },
      {
        path: "addCoffee",
        Component: AddCoffee,
      },
      {
        path: "myCoffee",
        Component: MyCoffees,
      },
      {
        path: "allCoffee",
        Component: AllCoffees,
      },
      {
        path: "updateCoffee/:id",
        Component: UpdateCoffee,
      },
    ],
  },
]);
