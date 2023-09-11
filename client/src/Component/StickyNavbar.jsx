import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

import { MdBloodtype } from 'react-icons/md'
import { useEffect } from "react";
import { Link } from "react-router-dom";
export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const nav = document.querySelector('nav')
      window.scrollY > 0 ? setNav(true) : setNav(false)
    })
  })
  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/home" className="flex items-center">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/account" className="flex items-center">
          Account
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Contect
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center">
          Docs
        </Link>
      </Typography>
    </ul>
  );

  return (

    <Navbar className={`sticky top-0 z-10 h-max max-w-full rounded-none py-1 px-4 lg:px-8 lg:py-1 bg-opacity-100 border-none  blur-none bg-yellow-700 text-white ${nav ? 'shadow-md' : 'shadow-none'}`}>
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          className="mr-4 flex justify-center items-center cursor-pointer py-1.5 text-white font-light"
        >
          <MdBloodtype className="flex justify-center items-center"></MdBloodtype>Blood Drop

        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <Link to='/login'>
            <Button
              variant="gradient"
              size="sm"
              className="hidden lg:inline-block"
            >
              <span>LogIN Now</span>
            </Button>
          </Link>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6  text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden text-white"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <MobileNav open={openNav}>
        {navList}
        <Link to='/login'>
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login Now</span>
          </Button>
        </Link>
      </MobileNav>
    </Navbar>
  );
}