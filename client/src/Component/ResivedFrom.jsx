import React from 'react';
import { Option, Typography } from '@material-tailwind/react';
import { Checkbox } from '@material-tailwind/react';
import { Card } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';

import { Select } from '@material-tailwind/react';
import fack from '../fack.json'
import blood from '../blood.json'
import { useState } from 'react';

const ResivedFrom = () => {
    const [bdGroup, setBdGroup] = useState('')
    const [location, setLocation] = useState('')
    const [findDoner, setFindDoner] = useState('')
    const TABLE_HEAD = ["Name", "Number", "Location", 'Blood Group'];

    const selectvlue = (e) => {
        setLocation(e)
    }


    const searchUser = () => {
        fetch(`http://127.0.0.1:8000/filter_by/${location}/${bdGroup}`)
            .then(res => res.json())
            .then(data => setFindDoner(data))
    }













    return (
        <div className="min-h-screen w-full h-full flex-col flex items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Resived From
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Resived <span className="font-semibold">Blood</span>.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">

                        <Select label="Select Location" onChange={selectvlue} required>
                            {
                                fack.map((e) => <Option value={e.name}>{e.name}</Option>)
                            }
                        </Select>
                        <Select label="Select Blood Group" onChange={(e) => setBdGroup(e)} required>
                            {
                                blood.map((e) => <Option value={e.bdGroup}>{e.bdGroup}</Option>)
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
                    {/* <Link to={'/userDeshBord'}> */}
                    <Button onClick={searchUser} className="mt-6" fullWidth>
                        Search
                    </Button>
                    {/* </Link> */}

                </form>
            </Card>


            <div>
                {
                    findDoner.length > 0 && (
                        <div className="flex flex-col items-center ">
                            <Card className="md:w-full w-[95%] h-full overflow-scroll md:overflow-hidden">

                                <table className="w-full md:min-w-max table-auto text-left">
                                    <thead>
                                        <tr>
                                            {TABLE_HEAD.map((head) => (
                                                <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal leading-none opacity-70"
                                                    >
                                                        {head}
                                                    </Typography>
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {

                                            findDoner.map((info, i) => (



                                                <tr key={i} className="even:bg-blue-gray-50/50">
                                                    <td className="p-1 md:p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {info.name}

                                                        </Typography>
                                                    </td>
                                                    {/* <td className="p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {info.email}
                                                        </Typography>
                                                    </td> */}
                                                    <td className="p-1 md:p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {info.phone}
                                                        </Typography>
                                                    </td>
                                                    <td className="p-1 md:p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {info.location}
                                                        </Typography>
                                                    </td>
                                                    <td className="p-1 md:p-4">
                                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                                            {info.blood_group}
                                                        </Typography>
                                                    </td>
                                                    <td className="flex gap-2 justify-center items-center">

                                                        <Button className="rounded-full bg-yellow-700 py-2 px-3">Add</Button>
                                                    </td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </Card>


                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ResivedFrom;