import React from 'react';
import { Typography } from '@material-tailwind/react';
import { Checkbox } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

const ResivedFrom = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Resived From
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Resived <span className="font-semibold">Blood</span>.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Blood Group" />
                        {/* <Input size="lg" label="Phone" /> */}
                        <Input size="lg" label="Location" />

                    </div>
                    <Checkbox
                        label={
                            <Typography
                                variant="small"
                                color="gray"
                                className="flex items-center font-normal"
                            >
                                I agree the
                                <a
                                    href="#"
                                    className="font-medium transition-colors hover:text-gray-900"
                                >
                                    &nbsp;Terms and Conditions
                                </a>
                            </Typography>
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Link to={'/userDeshBord'}>
                        <Button className="mt-6" fullWidth>
                            Search
                        </Button>
                    </Link>

                </form>
            </Card>
        </div>
    );
};

export default ResivedFrom;