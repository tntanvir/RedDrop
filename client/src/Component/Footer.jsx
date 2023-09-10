import { Typography } from "@material-tailwind/react";
import { MdBloodtype } from "react-icons/md";

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

export function Footer() {
    return (
        <footer className="relative w-full text-white">
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
                                    color="white"
                                    className="mb-3 font-medium opacity-40"
                                >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography
                                            as="a"
                                            href="/"
                                            color="white"
                                            className="py-1.5 font-normal transition-colors hover:text-blue-gray-500"
                                        >
                                            {link}
                                        </Typography>
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
                    <div className="flex gap-4 text-blue-gray-500 sm:justify-center">
                        <Typography as="a" href="/" className="opacity-80 transition-opacity hover:opacity-100">

                        </Typography>
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