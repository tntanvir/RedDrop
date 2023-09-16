import { useContext } from "react";
import { useEffect } from "react";
import { ContextApi } from "../App";
import { useState } from "react";

import { Card, DialogBody, DialogFooter, DialogHeader, Option } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import UserReviewFrom from "./UserReviewFrom";

import { Input } from "@material-tailwind/react";
import { Dialog } from "@material-tailwind/react";
import { Select } from "@material-tailwind/react";
import fack from '../fack.json'
import blood from '../blood.json'




const UserDeshBord = () => {
    const TABLE_HEAD = ["Name", "Email", "Number", "Location", 'Blood Group'];

    const [userLogin, setUserLogin] = useContext(ContextApi);
    const [profile, setProfile] = useState([])
    const [doner, setDoner] = useState([])
    // const [resived, setResived] = useState([])
    useEffect(() => {
        setProfile(userLogin)
        setDoner([])
        // setResived([])
    }, [])

    const clickdoner = () => {
        fetch(`http://127.0.0.1:8000/users/email/${userLogin.email}`)
            .then(res => res.json())
            .then(data => setDoner(data))
            .catch(e => console.log(e))
        setProfile([])
        // setResived([])

    }
    const clickaccount = () => {
        setProfile(userLogin)
        setDoner([])
        // setResived([])

    }
    // const clickresived = () => {
    //     setResived('')
    //     setProfile([])
    //     setDoner([])
    // }
    useEffect(() => {

    })


    const [update, setUpdate] = useState('')
    const [editNum, setEditNum] = useState('')
    const EditItem = (id) => {
        setEditNum(id)
        fetch(`http://127.0.0.1:8000/users/id/${id}`)
            .then(res => res.json())
            .then(data => {
                setUpdate(data)
                setLocation(data.location)
                setNumber(data.phone)
                setBdGroup(data.blood_group)
            })
        handleOpen()
    }
    const DeletItem = (id) => {
        fetch(`http://127.0.0.1:8000/users/${id}`, {
            method: "DELETE"
        })

    }

    const selectvlue = (e) => {
        setLocation(e)
    }
    const [bdGroup, setBdGroup] = useState('')
    const [location, setLocation] = useState('')
    const [number, setNumber] = useState('')



    // --------------------popup
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);


    const onUpdate = (id) => {
        console.log(bdGroup, location, number);
        handleOpen()
        fetch(`http://127.0.0.1:8000/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({

                "name": update.name,
                "email": update.email,
                "phone": number,
                "blood_group": bdGroup,
                "location": location,
                "location_bn": location,
                "lat": 0,
                "lon": 0,
                "is_donar": false


            }),
            headers: {
                'Content-type': "application/json; charset=UTF-8"
            },
        }).then(res => res.json())
            .then(data => console.log(data))
        console.log(id)
    }





    return (
        <>
            <div className="min-h-screen h-full bg-blue-gray-100/10 md:flex">
                <div className="flex md:flex-col justify-center md:justify-start gap-3 md:items-start  md:border-r-2 border-black">
                    <button onClick={clickdoner} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Doner</button>
                    <button onClick={clickaccount} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Account</button>
                    {/* <button onClick={clickresived} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Resived</button> */}
                </div>
                <div className="p-3 w-full h-full">
                    {
                        profile.email && (
                            <div className="flex flex-col items-center">
                                <img className="rounded-full" src={profile.photoURL} alt="" />
                                <h1>{profile.displayName}</h1>
                                <p>{profile.email}</p>
                                <UserReviewFrom></UserReviewFrom>
                            </div>
                        )
                    }
                    {
                        doner.length > 0 && (
                            <div className="flex md:flex-col items-center">
                                <Card className="h-full w-full overflow-scroll">

                                    <table className="w-full min-w-max table-auto text-left">
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

                                                doner.map((info, i) => (



                                                    <tr key={i} className="even:bg-blue-gray-50/50">
                                                        <td className="p-4">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {info.name}

                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {info.email}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {info.phone}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {info.location}
                                                            </Typography>
                                                        </td>
                                                        <td className="p-4">
                                                            <Typography variant="small" color="blue-gray" className="font-normal">
                                                                {info.blood_group}
                                                            </Typography>
                                                        </td>
                                                        <td className="flex gap-2 justify-center items-center">

                                                            <Button onClick={() => EditItem(info.id)} className="rounded-full py-2 px-3">Edit</Button>
                                                            <Button onClick={() => DeletItem(info.id)} className="rounded-full bg-yellow-700 py-2 px-3">Delete</Button>
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
                    {/* {
                    resived && (
                        <div className="flex flex-col items-center">
                            Resived
                        </div>
                    )
                } */}
                </div>
            </div>




            {/* ------------------------------popup------------------------------ */}

            {/* <Button onClick={handleOpen}>Message Dialog</Button> */}
            <Dialog open={open} handler={handleOpen}>
                <div className="flex items-center justify-center">
                    <DialogHeader className="text-center">Now Update Your Data</DialogHeader>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="mr-3 h-5 w-5 cursor-pointer flex"
                        onClick={handleOpen}
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <DialogBody divider className="mt-24">
                    <div className="grid gap-6">
                        <Input label="Number" value={number} onChange={(e) => setNumber(e.target.value)} />

                        <Select label="Select Blood Group" value={update.blood_group} onChange={(e) => setBdGroup(e)} required>
                            {
                                blood.map((e) => <Option value={e.bdGroup}>{e.bdGroup}</Option>)
                            }
                        </Select>
                        <Select label="Select Location" value={update.location} onChange={selectvlue} required>
                            {
                                fack.map((e) => <Option value={e.name}>{e.name}</Option>)
                            }
                        </Select>

                    </div>
                </DialogBody>
                <DialogFooter className="space-x-2">
                    <Button variant="outlined" color="red" onClick={handleOpen}>
                        close
                    </Button>
                    <Button variant="gradient" color="green" onClick={() => onUpdate(editNum)}>
                        Update
                    </Button>
                </DialogFooter>
            </Dialog>


        </>
    );
}
export default UserDeshBord;