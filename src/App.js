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
// import Contact from "./components/contact/Contact";
// import Login from "./components/login/Login";
import LoginForm from "./components/login/LoginForm";
import ContactForm from "./components/contact/ContactForm";
import { Provider } from "react-redux";
import store from "./store/store";
import Favorites from "./components/favorites/Favorites";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Provider store={store}>
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
              <NavLink to={`/favorites`} className="nav-link">
                Favorites
              </NavLink>
            </Nav>
            <Outlet />
          </Provider>
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
          path: "/favorites",
          element: <Favorites />,
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
