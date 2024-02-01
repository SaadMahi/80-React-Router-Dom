import { Typography } from "@material-tailwind/react";
import { NavLink } from "react-router-dom";

const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-blue-500  ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-blue-500  ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          About
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/contacts"
          className={({ isActive }) =>
            `hover:text-blue-500  ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Contacts
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `hover:text-blue-500  ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Users
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium"
      >
        <NavLink
          to="/github"
          className={({ isActive }) =>
            `hover:text-blue-500  ${isActive ? "text-blue-500" : "text-black"}`
          }
        >
          Github
        </NavLink>
      </Typography>
    </ul>
  );
};

export default NavList;
