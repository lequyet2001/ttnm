import { createBrowserRouter, Outlet } from "react-router-dom";
import HomePage from "../Page/HomePage";
import PageClass from "../Page/PageClass";
import PersionlPage from "../Page/PersonlPage";
// import AuthProvider from "../Context/AuthProvider";
import ErrorPage from "../Page/ErrorPage";
import Chat from "../component/Chat";
import Zoom from "../Page/Zoom";
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
        path:'/' || '/home',
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
    },
    {
        element:<Chat/>,
        errorElement:<ErrorPage/>,
        path:'/chat'
    },
    {
        element:<Zoom/>,
        errorElement:<ErrorPage/>,
        path:'/zoom'
    }
])