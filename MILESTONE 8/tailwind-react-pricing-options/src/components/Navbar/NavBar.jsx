import React from 'react';
import Link from './Link';

const navigationData = [
    {
      id: 1,
      path: "/home",
      name: "Home"
    },
    {
      id: 2,
      path: "/about",
      name: "About Us"
    },
    {
      id: 3,
      path: "/services",
      name: "Services"
    },
    {
      id: 4,
      path: "/contact",
      name: "Contact"
    },
    {
      id: 5,
      path: "/blog",
      name: "Blog"
    }
  ];
  


const NavBar = () => {
    return (
        <nav>

            <ul className="flex">
                {
                    navigationData.map(route=> <Link key={route.id} route={route}></Link>)
                }
            </ul>











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