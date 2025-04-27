import React, { useState } from "react";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const navigationData = [
	{
		id: 1,
		path: "/",
		name: "Home",
	},
	{
		id: 2,
		path: "/about",
		name: "About Us",
	},
	{
		id: 3,
		path: "/services",
		name: "Services",
	},
	{
		id: 4,
		path: "/contact",
		name: "Contact",
	},
	{
		id: 5,
		path: "/blog",
		name: "Blog",
	},
];

const NavBar = () => {

    const [open, setOpen] = useState(false);
    const links = navigationData.map((route) => (
        <Link key={route.id} route={route}></Link>
    ))

	return (
		<nav className="flex justify-between mx-10 mt-4 ">
			<span onClick={()=> setOpen(!open)} className="flex border">

                {
                    open ? 
                    <X className="md:hidden"></X> : 
                    <Menu className="md:hidden"></Menu>
                }

                {/* small nav links */}
                <ul className={`md:hidden absolute duration-1000 text-black
                ${open ? 'top-12' : '-top-40'}
                bg-amber-200 
                    `}>
                    {
                        links
                    }
                </ul>

				
				<h3 className="ml-2">My Navbar</h3>
			</span>

            {/* big nav links */}
			<ul className="hidden md:flex">
				{
                    links
                }
			</ul>

			<button>Sign In</button>

			{/* 
            <ul className="flex">
                {
                    navigationData.map(route=> 
                        <li><a className="mr-10" href={route.path}>{route.name}</a></li>

                    )
                }

            </ul> */}

			{/* <ul className=" flex ">
                <li><a className="mr-10" href="/">Home</a></li>
                <li><a className="mr-10" href="/about">About</a></li>
                <li><a className="mr-10" href="/blog">Blog</a></li>
            </ul> */}
		</nav>
	);
};

export default NavBar;
