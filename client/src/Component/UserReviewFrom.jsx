import React from 'react';
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
import { Textarea } from '@material-tailwind/react';
import { Rating } from '@material-tailwind/react';
import { useState } from 'react';
const UserReviewFrom = () => {
    const [rated, setRated] = useState(5);
    return (
        <Card className="w-96 md:w-1/2 mt-40">
            <CardHeader
                variant="gradient"
                color="gray"
                className="mb-4 grid h-28 place-items-center"
            >
                <Typography variant="h3" color="white">
                    Share Your Feedback
                </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
                <Textarea label="Message" />
                <div className="flex items-center gap-2">
                    <Rating value={5} onChange={(value) => setRated(value)} />
                    <Typography color="blue-gray" className="font-medium">
                        {rated}.0 Rated
                    </Typography>
                </div>
                <div className="-ml-2.5">
                    <Checkbox label="Remember Me" />
                </div>
            </CardBody>
            <CardFooter className="pt-0">
                <Button variant="gradient" fullWidth>
                    Share Now
                </Button>


            </CardFooter>
        </Card>
    );
};

export default UserReviewFrom;