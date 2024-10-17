/* eslint-disable no-unused-vars */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Home from "../Pages/Home/Home";
import Reservation from "../Pages/Reservation/Reservation";
// import TodaysReservation from '../Pages/Applications/JobApplication'
import EmployeeApplication from "../Pages/Applications/JobApplication";
import NewReservation from "../Pages/TodaysReservation/TodaysReservation";
// import AddReview from '../Pages/Add Review/AddReview'
import Notes from "../Pages/Notes/Notes";
// import Calculator from '../Pages/Calculator/Calculator'
import AnydayReservation from "../Pages/AnydayReservation/AnydayReservation";
import PostABlog from "../Pages/PostABlog/PostABlog";
import PostAJob from "../Pages/PostAJob/PostAJob";
// import Signup from '../Login/Signup'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/reservation",
        element: <Reservation></Reservation>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/application",
        element: <EmployeeApplication></EmployeeApplication>,
      },
      {
        path: "/today",
        element: <NewReservation></NewReservation>,
      },
      {
        path: "/anyday",
        element: <AnydayReservation></AnydayReservation>,
      },
      // {
      //     path:'/addRe',
      //     element: <AddReview></AddReview>
      // },
      {
        path: "/notes",
        element: <Notes></Notes>,
      },
      // {
      //     path: '/calculator',
      //     element: <Calculator></Calculator>
      // },
      {
        path: "/postajbo",
        element: <PostAJob></PostAJob>,
      },
      {
        path: "/postablog",
        element: <PostABlog></PostABlog>,
      },
      // {
      //     path: '/signup',
      //     element: <Signup></Signup>
      // }
    ],
  },
]);

export default router;
