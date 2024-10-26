import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Grocery from "./Grocery";
import Body from "./Body";
// import Error from "./Error";
import { createBrowserRouter, Route, Router } from "react-router-dom";


function AppLayout() {
  return (
    <div className="AppLayout">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const appRouter = createBrowserRouter([{
  path: "/",
  element: <AppLayout/>,
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

export default AppLayout;