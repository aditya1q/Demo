
const Navbar = () => {

    return (
        <nav className="bg-black p-4 w-full">
            <div className="container mx-auto">
                <div className="flex justify-around items-center">
                    <div className="text-white text-2xl font-bold">Aditya Tiwari</div>
                    <ul className="flex space-x-10">
                        <li>
                            <a
                                href="/about"
                                className="text-white hover:text-blue-200 transition duration-300 hover:underline"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="/career"
                                className="text-white hover:text-blue-200 transition duration-300 hover:underline"
                            >
                                Careers
                            </a>
                        </li>
                        <li>
                            <a
                                href="/contact"
                                className="text-white hover:text-blue-200 transition duration-300 hover:underline"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
