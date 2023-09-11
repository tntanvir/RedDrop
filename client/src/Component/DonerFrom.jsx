
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const DonerFrom = () => {
    return (
        <div className="h-screen flex items-center justify-center">
            <Card color="transparent" shadow={false}>
                <Typography variant="h4" color="blue-gray">
                    Doner From
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                    Enter your details to Donat <span className="font-semibold">Blood</span>.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Blood Group" />
                        <Input size="lg" label="Phone" />
                        <Input size="lg" label="Location" />
                        {/* <Input type="password" size="lg" label="Password" /> */}
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
                            Submit
                        </Button>
                    </Link>

                </form>
            </Card>
        </div>
    );
}

export default DonerFrom;