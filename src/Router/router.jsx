import {
  createBrowserRouter,
} from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import JobApply from "../Pages/JobApply/JobApply";
import PrivateRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            path: '/',
            Component: Home
        },
        {
            path: '/jobs/:id',
            Component: JobDetails,
            loader: ({params})=> fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
            path: 'jobApply/:id',
            element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {
            path: '/register',
            Component: Register
        },
        {
            path: '/signin',
            Component: SignIn
        }
    ]
  },
]);


export default router