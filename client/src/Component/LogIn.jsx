
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    CardFooter,
} from "@material-tailwind/react";
import { useContext } from "react";

import { FcGoogle } from 'react-icons/fc'
import { MdBloodtype } from "react-icons/md";
import { ContextApi } from "../App";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";



// import auth
import auth from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { Input } from "@material-tailwind/react";

import { Button } from "@material-tailwind/react";
//

//tostify



const LogIn = () => {
    const [userLogin, setUserLogin] = useContext(ContextApi);
    const navigate = useNavigate();
    const location = useLocation();
    const { from } = location.state;
    const provider = new GoogleAuthProvider();
    const googleLogin = () => {
        signInWithPopup(auth, provider).then((resutl) => {
            // console.log(resutl.user);
            const user = resutl.user
            setUserLogin(user)
            if (from) {
                navigate(from.pathname)
            }



        })

    }

    return (
        <div className='h-screen flex flex-col gap-5 items-center justify-center'>
            <Typography variant="h5" className="mb-6 flex">
                <MdBloodtype className="flex justify-center items-center"></MdBloodtype>Blood Drop
            </Typography>
            <Card className="w-96">
                <CardHeader
                    variant="gradient"
                    color="gray"
                    className="mb-4 grid h-28 place-items-center"
                >
                    <Typography variant="h3" color="white">
                        Sign In
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-4 ">
                    <Input label="Email" size="lg" />
                    <Input label="Password" size="lg" />
                    {/* <div className="-ml-2.5">
                        <Checkbox label="Remember Me" />
                    </div> */}
                    <Button variant="gradient" fullWidth>
                        Sign In
                    </Button>
                    <button onClick={googleLogin} className="flex items-center hover:cursor-pointer justify-center gap-2 border rounded-full p-2 ">
                        <FcGoogle className="text-2xl" /> <span className="text-1xl">Continue with Google</span>
                    </button>
                </CardBody>
                <CardFooter className="pt-0">

                    <Typography variant="small" className="mt-1 flex justify-center">
                        Don&apos;t have an account?
                        <Typography
                            as="a"
                            href="#signup"
                            variant="small"
                            color="blue"
                            className="ml-1 font-bold"
                        // onClick={handleOpen}
                        >
                            Sign up
                        </Typography>
                    </Typography>
                </CardFooter>
            </Card>
        </div>

    );
};

export default LogIn;