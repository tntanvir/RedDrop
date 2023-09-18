import { Typography } from "@material-tailwind/react";
import { MdBloodtype } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai"
import { Link } from "react-router-dom";
const LINKS = [
    {
        title: "Product",
        items: ["Overview", "Features", "Solutions", "Tutorials"],
    },
    {
        title: "Company",
        items: ["About us", "Careers", "Press", "News"],
    },
    {
        title: "Resource",
        items: ["Blog", "Newsletter", "Events", "Help center"],
    },
];

const currentYear = new Date().getFullYear();

const Footers = () => {
    return (
        <footer className="relative w-full text-black bg-yellow-700 pt-4">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
                    <Typography variant="h5" className="mb-6 flex  ">
                        <MdBloodtype className="flex justify-center items-center"></MdBloodtype>Blood Drop
                    </Typography>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography
                                    variant="small"
                                    color="black"
                                    className="mb-3 font-medium opacity-40"
                                >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Link

                                            to="/"

                                            className="py-1.5 font-normal text-gray-800 transition-colors hover:text-blue-gray-500"
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
                <div className="mt-12 flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-500 md:mb-0 flex"
                    >
                        &copy; {currentYear} <a href="/" className="flex items-center">  <MdBloodtype className="flex" /> Blood-Drop</a>. All
                        Rights Reserved.
                    </Typography>
                    <div className="flex gap-4 text-blue-gray-500 text-2xl sm:justify-center">
                        <a href="https://github.com/tntanvir/RedDrop"
                            className="opacity-80 transition-opacity hover:opacity-100" target="_blank" rel="noreferrer" >
                            <AiFillGithub />
                        </a>
                        <Typography as="a" href="/" className="opacity-80 transition-opacity hover:opacity-100">

                        </Typography>
                        <Typography as="a" href="/" className="opacity-80 transition-opacity hover:opacity-100">

                        </Typography>
                        <Typography as="a" href="/" className="opacity-80 transition-opacity hover:opacity-100">

                        </Typography>
                        <Typography as="a" href="/" className="opacity-80 transition-opacity hover:opacity-100">

                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footers;