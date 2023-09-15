import { useContext } from "react";
import { useEffect } from "react";
import { ContextApi } from "../App";
import { useState } from "react";

import { Card } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import UserReviewFrom from "./UserReviewFrom";





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
    return (
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
                                                        {/* <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
                                                            Edit
                                                        </Typography> */}
                                                        <Button className="rounded-full py-2 px-3">Edit</Button>
                                                        <Button className="rounded-full bg-yellow-700 py-2 px-3">Delet</Button>
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
    );
}
export default UserDeshBord;