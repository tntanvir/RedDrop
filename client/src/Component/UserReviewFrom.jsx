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
const UserReviewFrom = ({ name, email, photo_url }) => {
    // console.log(name, email, photo_url);
    const [rated, setRated] = useState(5);
    const [text, setText] = useState('');


    const sendFeedBack = () => {
        if (text.length > 10) {
            fetch('http://127.0.0.1:8000/feedbacks', {
                method: 'POST',
                body: JSON.stringify({
                    "name": name,
                    "email": email,
                    "photo_url": photo_url,
                    "message": text,
                    "rated": rated.toString(),
                    "rated_value": rated

                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }).then(res => console.log(res.json()))
                .catch(e => console.log(e))
            console.log(text, rated);

        } else {
            console.log("add text");
        }
        setText('')
    }
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
            <form action="">
                <CardBody className="flex flex-col gap-4">

                    <Textarea label="Message" value={text} onChange={(e) => setText(e.target.value)} required />
                    <div className="flex items-center gap-2">
                        <Rating value={rated} onChange={(value) => setRated(value)} />
                        <Typography color="blue-gray" className="font-medium">
                            {rated}.0 Rated
                        </Typography>
                    </div>

                </CardBody>
                <CardFooter className="pt-0">
                    <Button onClick={sendFeedBack} variant="gradient" fullWidth>
                        Share Now
                    </Button>
                </CardFooter>
            </form>

        </Card>
    );
};

export default UserReviewFrom;