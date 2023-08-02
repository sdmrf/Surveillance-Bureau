import {RouterProvider, createBrowserRouter } from "react-router-dom"
import "./App.scss"
import About from "./Pages/About Page/About";
import Contact from "./Pages/Contact Page/Contact";
import Complaints from "./Pages/Complaints Page/Complaints";
import P1 from "./Pages/Landing Page/P1/P1";


const Layout = () => {
  return (
    <div className="App">
      <P1 />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Layout />),
  },
  {
    path: "complaints",
    element: (<Complaints />),
  },
  {
    path: "about",
    element: (<About />),
  },
  {
    path: "contact",
    element: (<Contact />),
  },
]);

const App = () => {
  return (
    <div> <RouterProvider router={router} /> </div>
  )
}

export default App