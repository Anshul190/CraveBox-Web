import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Grocery from "./Grocery";
import Body from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


function Layout() {
  return (
    <div className="Layout">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Layout/>,
  children: [{
      path: "/",
      element: <Body />,
  },
  {
      path: "/About",
      element: <About/>,
  },
  {
      path: "/Contact",
      element: <Contact/>,
  },
  {
      path: "/Grocery",
      element: <Grocery/>,
  }],
  errorElement:<Error/>
},
]);
function AppLayout() {
  return (
    <RouterProvider router={appRouter}/>
  )
}


export default AppLayout;