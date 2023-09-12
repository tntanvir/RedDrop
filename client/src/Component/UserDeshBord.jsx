import { useContext } from "react";
import { useEffect } from "react";
import { ContextApi } from "../App";
import { useState } from "react";



const UserDeshBord = () => {
    const [userLogin, setUserLogin] = useContext(ContextApi);
    const [profile, setProfile] = useState([])
    const [doner, setDoner] = useState([])
    const [resived, setResived] = useState([])
    useEffect(() => {
        setProfile(userLogin)
        setDoner(false)
        setResived(false)
    }, [])

    const clickdoner = () => {
        setDoner(true)
        setProfile(false)
        setResived(false)

    }
    const clickaccount = () => {
        setProfile(userLogin)
        setDoner(false)
        setResived(false)

    }
    const clickresived = () => {
        setResived(true)
        setProfile(false)
        setDoner(false)
    }
    return (
        <div className="h-screen bg-blue-gray-100/10 md:flex">
            <div className="flex md:flex-col justify-center md:justify-start gap-3 md:items-start  md:border-r-2 border-black">
                <button onClick={clickdoner} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Doner</button>
                <button onClick={clickaccount} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Account</button>
                <button onClick={clickresived} className="hover:bg-gray-900 md:px-9 font-semibold hover:text-white duration-300 px-3 py-2 md:w-full">Resived</button>
            </div>
            <div className="p-3 w-full">
                {
                    profile && (
                        <div className="flex flex-col items-center">
                            <img className="rounded-full" src={profile.photoURL} alt="" />
                            <h1>{profile.displayName}</h1>
                            <p>{profile.email}</p>
                        </div>
                    )
                }
                {
                    doner && (
                        <div className="flex flex-col items-center">
                            doner
                        </div>
                    )
                }
                {
                    resived && (
                        <div className="flex flex-col items-center">
                            Resived
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default UserDeshBord;