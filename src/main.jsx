import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import Contact from "./pages/Contact.jsx";
import User from "./pages/User.jsx";
import Error from "./ui/Error.jsx";
import Github, { gitHubInfoLoader } from "./pages/Github.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="users/" element={<User />}>
        <Route path=":userid" element={<User />} />
      </Route>
      <Route loader={gitHubInfoLoader} path="/github" element={<Github />} />
      <Route path="*" element={<Error />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
