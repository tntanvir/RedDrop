import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  CardHeader,
  CardFooter,
  CardBody,
} from "@material-tailwind/react";

import { MdBloodtype } from 'react-icons/md'
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@material-tailwind/react";
import { Card } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { FcGoogle } from "react-icons/fc";






import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";



// // import auth
import auth from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useContext } from "react";
import { ContextApi } from "../App";





export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const [nav, setNav] = React.useState(false);



  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);













  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      // const nav = document.querySelector('nav')
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
        <Link to="/userDeshBord" className="flex items-center">
          Account
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"

      >
        <Link to="/contect" className="flex items-center">
          Contect
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="white"
        className="p-1 font-normal"

      >
        <Link to="/docs" className="flex items-center">
          Docs
        </Link>
      </Typography>
    </ul>
  );






  const [userLogin, setUserLogin] = useContext(ContextApi);
  const navigate = useNavigate();
  // const location = useLocation();
  // const { from } = location.state;
  const provider = new GoogleAuthProvider();
  const googleLogin = () => {
    handleOpen()
    signInWithPopup(auth, provider).then((resutl) => {
      // console.log(resutl.user);
      const user = resutl.user
      setUserLogin(user)
      // if (from) {
      //   navigate(from.pathname)
      // }

    })
  }


  const singOut = () => {
    console.log('object');

    signOut(auth).then(() => {
      // Sign-out successful.
      setUserLogin(false)
      navigate('/')
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }



  return (
    <>
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
            {/* <Link to='/userDeshBord'> */}


            {userLogin.email ?
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={singOut}
              >
                <span>SingOut</span>
              </Button> :
              <Button
                variant="gradient"
                size="sm"
                className="hidden lg:inline-block"
                onClick={handleOpen}
              >
                <span>LogIN Now</span>
              </Button>
            }
            {/* </Link> */}
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
        <MobileNav open={openNav} onClick={() => setOpenNav(!openNav)}>
          {navList}
          <Link to='/userDeshBord'>
            <Button onClick={() => setOpenNav(!openNav)} variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Login Now</span>
            </Button>
          </Link>
        </MobileNav>
      </Navbar>




      {/* ---------------------------------DILOG BOX----------------------------------- */}

      {/* <Button onClick={handleOpen}>Sign In</Button> */}
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            // color="yellow-700"
            className="mb-4 grid h-28 bg-yellow-700/100 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            {/* <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div> */}
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Sign In
            </Button>
            <button onClick={googleLogin} className="flex items-center hover:cursor-pointer justify-center gap-2 border rounded-full p-2 ">
              <FcGoogle className="text-2xl" /> <span className="text-1xl">Continue with Google</span>
            </button>
          </CardBody>
          <CardFooter className="pt-0">

            <Typography variant="small" className="mt-6 flex justify-center">
              Don&apos;t have an account?
              <Typography
                as="a"
                href="#signup"
                variant="small"
                color="blue"
                className="ml-1 font-bold"
                onClick={handleOpen}
              >
                Sign up
              </Typography>
            </Typography>
          </CardFooter>
        </Card>
      </Dialog>




    </>
  );
}