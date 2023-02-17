import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../homepage/HomePage";
import PageClass from "../homepage/PageClass";
import PersionlPage from "../homepage/PersionlPage";
// import AuthProvider from "../Context/AuthProvider";
import ErrorPage from "../homepage/ErrorPage";
// import Home from "../page/Home";
// import Login from "../page/Login";
// import ProtectedRouter from "./ProtectedRouter";


// const AuthLayout = () => {
//     return <AuthProvider>
//         <Outlet />
//     </AuthProvider>
// }
export default createBrowserRouter([
    {
        element:<HomePage/>,
        errorElement:<ErrorPage/>,
        path:'/' || '/home'
    },
    {
        element:<PageClass/>,
        errorElement:<ErrorPage/>,
        path:'/class'
    },
    {
        element:<PersionlPage/>,
        errorElement:<ErrorPage/>,
        path:'/persion'
    }
])