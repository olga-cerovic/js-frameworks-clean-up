import "./App.css";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/home/Home";
import Detail from "./components/detail/Detail";
import LoginForm from "./components/login/LoginForm";
import ContactForm from "./components/contact/ContactForm";
import ToastContainer from "react-bootstrap/ToastContainer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar expand="lg"></Navbar>
          <Nav className="mr-auto">
            <NavLink to={`/`} className="nav-link">
              Home
            </NavLink>
            <NavLink to={`/contact`} className="nav-link">
              Contact
            </NavLink>
            <NavLink to={`/login`} className="nav-link">
              Login
            </NavLink>
          </Nav>
          <Outlet />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/detail/:param",
          element: <Detail />,
        },
        {
          path: "/contact",
          element: <ContactForm />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/admin",
          element: <h2 className="admin-titel">Admin</h2>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
