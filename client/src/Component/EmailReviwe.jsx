import { useContext } from "react";
import { ContextApi } from "../App";
import { useState } from "react";
import { useEffect } from "react";
import People from "./People";
import { CardFooter, Rating } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Avatar,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";

const EmailReviwe = ({ EditReviwe, deleteReviwe }) => {
    const [userLogin, setUserLogin] = useContext(ContextApi)
    const [allreviwe, setAllreviwe] = useState([])
    useEffect(() => {
        fetch(`http://127.0.0.1:8000/feedbacks/email/${userLogin.email}`)
            .then(res => res.json())
            .then(data => setAllreviwe(data))
    }, [])

    return (
        <div className="h-full flex items-center justify-center">

            <div className="flex gap-5 flex-wrap justify-center">
                {
                    allreviwe && allreviwe.map((data, i) => (
                        // <h1 key={i}>{data.name}</h1>
                        <Card key={i} color="transparent" shadow={false} className="w-full max-w-[26rem] min-h-[20rem] bg-gray-100">
                            <CardHeader
                                color="transparent"
                                floated={false}
                                shadow={false}
                                className="mx-0 flex items-center gap-4 pt-0 pb-8 p-2"
                            >
                                <Avatar
                                    size="lg"
                                    variant="circular"
                                    src={data.photo_url}
                                    alt="tania andrew"
                                />
                                <div className="flex w-full flex-col gap-0.5 ">
                                    <div className="flex items-center justify-between">
                                        <Typography variant="h5" color="blue-gray">
                                            {data.name}
                                        </Typography>
                                        <div className="5 flex items-center gap-0">


                                            <Rating value={data.rated_value} readonly />




                                        </div>
                                    </div>
                                    <Typography color="blue-gray">{data.email}</Typography>
                                </div>
                            </CardHeader>
                            <CardBody className="mb-6  p-2">
                                <Typography>
                                    {data.message.slice(0, 200)}
                                </Typography>
                            </CardBody>
                            <CardFooter className=" p-2 bottom-2 right-0  absolute flex justify-end items-end gap-2">
                                <Button variant="gradient" onClick={() => EditReviwe(data.id)} >Edit</Button>
                                <Button variant="gradient" onClick={() => deleteReviwe(data.id)}>Delete</Button>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>
    );
};

export default EmailReviwe;