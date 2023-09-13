import React from 'react';
import { Option, Typography } from '@material-tailwind/react';
import { Checkbox } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Input } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { Select } from '@material-tailwind/react';
import fack from '../fack.json'
import blood from '../blood.json'
import { useState } from 'react';
const ResivedFrom = () => {
    const [bdGroup, setBdGroup] = useState('')
    const [location, setLocation] = useState('')

    const selectvlue = (e) => {
        setLocation(e)
    }
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
                        <Select label="Select Blood Group" onChange={(e) => setBdGroup(e)} required>
                            {
                                blood.map((e) => <Option value={e.bdGroup}>{e.bdGroup}</Option>)
                            }
                        </Select>
                        <Select label="Select Location" onChange={selectvlue} required>
                            {
                                fack.map((e) => <Option value={e.name}>{e.name}</Option>)
                            }
                        </Select>

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
                        <Button onClick={() => console.log(location, bdGroup)} className="mt-6" fullWidth>
                            Search
                        </Button>
                    </Link>

                </form>
            </Card>
        </div>
    );
};

export default ResivedFrom;