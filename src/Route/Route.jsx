import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import Donation from "../Pages/Donation";
import Statistics from "../Pages/Statistics";
import DonationDetails from "../Pages/DonationDetails";
import ErrorPage from "../Pages/ErrorPage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const myRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/donation",
        element: (
          <PrivetRouter>
            <Donation></Donation>
          </PrivetRouter>
        ),
      },
      {
        path: "/statistics",
        element: (
          <PrivetRouter>
            <Statistics></Statistics>
          </PrivetRouter>
        ),
      },
      {
        path: "/donationDetails/:id",
        loader: () => fetch("/data.json"),
        element: (
          <PrivetRouter>
            <DonationDetails></DonationDetails>
          </PrivetRouter>
        ),
      },
    ],
  },
]);

export default myRoute;