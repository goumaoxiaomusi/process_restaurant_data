import Landing from "../pages/landing-page"
import Result from "../pages/result-page"
import NotFound from "../pages/not-found"
import {createBrowserRouter} from 'react-router-dom'

const router = createBrowserRouter([
    {
       path:'/landing' ,
       element: <Landing />
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