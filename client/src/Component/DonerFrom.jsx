
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Option,
} from "@material-tailwind/react";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import { ContextApi } from "../App";
import { useNavigate } from "react-router-dom";
import { Select } from "@material-tailwind/react";
import fack from '../fack.json'
import blood from '../blood.json'

const DonerFrom = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [bdGroup, setBdGroup] = useState('')
    const [location, setLocation] = useState('')
    const [userLogin, setUserLogin] = useContext(ContextApi);
    const navigate = useNavigate()

    useEffect(() => {
        setEmail(userLogin.email)
        setName(userLogin.displayName)
        console.log(fack)
    }, [])

    const selectvlue = (e) => {
        setLocation(e)
    }

    const hendleSubmit = () => {
        console.log(name, email, phone, bdGroup, location);
        navigate('/userDeshBord')
    }

    // const phonNum = () => {
    //     const mobileNumber = "+8801000000000";
    //     if (new Regex("^([01]|\+88)?\d{11}").IsMatch(mobileNumber)) {
    //         console.log('il');
    //     }
    //     else {
    //         console.log('jh');
    //     }
    // }






    return (
        <div className="h-screen flex items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Doner From
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Donat <span className="font-semibold">Blood</span>.
                </Typography>
                <form onSubmit={hendleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Name" value={name && name} required />
                        <Input size="lg" label="Email" value={email && email} required />
                        <Input size="lg" label="Phone" required onChange={(e) => setPhone(e.target.value)} />



                        <Select label="Select Blood Group" onChange={(e) => setBdGroup(e)}>
                            {
                                blood.map((e) => <Option value={e.bdGroup}>{e.bdGroup}</Option>)
                            }
                        </Select>
                        <Select label="Select Location" onChange={selectvlue}>
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
                    {/* <Link to={'/userDeshBord'}> */}
                    <Button type="submit" className="mt-6" fullWidth>
                        Submit
                    </Button>
                    {/* </Link> */}

                </form>
            </Card>
        </div>
    );
}

export default DonerFrom;