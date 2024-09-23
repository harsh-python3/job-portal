import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import PostJob from "../Pages/PostJob";
import SignUpForm from "../Pages/SignUpForm";
import LogInForm from "../Pages/LogInForm";
import MyJob from "../Pages/MyJob";
import SalaryEstimate from "../Pages/SalaryEstimate";




const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children:[
        {path:"/",
            element:<Home/>
        },
        {
          path: "/post-job",
            element: <PostJob/>
        },
        {
          path: "/sign-up",
          element: <SignUpForm/>
        }
        ,
        {
          path: "/login",
          element: <LogInForm/>
        },
        {
          path: "/my-job",
          element: <MyJob/>
        },
        {
          path: "/salary",
          element: <SalaryEstimate/>
        },

       
      ]
    },
  ]);

  export default router;