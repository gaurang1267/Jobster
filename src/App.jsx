import {
  Landing,
  DashboardLayout,
  Error,
  Register,
  RootLayout,
  Stats,
  AddJob,
  AllJobs,
  Profile,
} from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { checkAuthLoader } from "./utils/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        loader: checkAuthLoader,
        children: [
          {
            path: "",
            element: <Stats />,
            index: true,
          },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "all-jobs",
            element: <AllJobs />,
          },
          {
            path: "add-job",
            element: <AddJob />,
          },
        ],
      },
      {
        path: "landing",
        element: <Landing />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;
