import Result from "../pages/result-page"
import NotFound from "../pages/not-found"
import {createBrowserRouter,Navigate} from 'react-router-dom'

// This defines how to route to the result page
//"http://localhost:3000/result" or "" http://localhost:3000"" will show the result
const router = createBrowserRouter([
   {
      path: '/',
      element: <Navigate replace to="/result" />  // Redirect from root to /result
  },
    {
        path:'/result' ,
        element: <Result />
     },
     {
        path :'*',
        element: <NotFound />
     }

])

export default router