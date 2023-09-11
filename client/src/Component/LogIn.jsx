
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
} from "@material-tailwind/react";

import { FcGoogle } from 'react-icons/fc'
import { MdBloodtype } from "react-icons/md";

const LogIn = () => {
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
                    <div className="flex items-center hover:cursor-pointer justify-center gap-2 border rounded-full p-2 ">
                        <FcGoogle className="text-2xl" /> <span className="text-1xl">Continue with Google</span>
                    </div>
                </CardBody>

            </Card>
        </div>
    );
}
export default LogIn;