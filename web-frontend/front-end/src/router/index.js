import Result from "../pages/result-page"
import NotFound from "../pages/not-found"
import {createBrowserRouter,Navigate} from 'react-router-dom'


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