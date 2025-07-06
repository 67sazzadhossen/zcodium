"use client";
import Image from "next/image";
import logo from "@/assests/zcodium_logo_coloured.png";
import Link from "next/link";

const Navbar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Projects", // অথবা 'Portfolio'
      link: "/projects", // অথবা '/portfolio'
    },
    {
      name: "About", // অথবা 'About Me'
      link: "/about",
    },
    {
      name: "Skills", // অথবা 'Services'
      link: "/skills", // অথবা '/services'
    },
    {
      name: "Contact", // অথবা 'Contact Me'
      link: "/contact",
    },
    // যদি ব্লগ বা রেজ্যুমে যোগ করতে চান:
    // {
    //     name: 'Blog',
    //     link: '/blog',
    // },
    // {
    //     name: 'Resume',
    //     link: '/resume', // অথবা একটি ডিরেক্ট ডাউনলোড লিঙ্ক
    // },
  ];
  return (
    <div className=" flex items-center justify-between px-16 py-4 fixed w-full max-w-[90%] left-1/2 -translate-x-1/2 backdrop-blur-3xl">
      {/* logo */}
      <div>
        <Image src={logo} alt="logo" width={120} height={80} />
      </div>

      <div className="flex items-center gap-24 ">
        {navItems.map((item, idx) => (
          <Link
            className="uppercase text-sm bg-gradient-to-r from-blue-700 to-purple-800 bg-clip-text text-transparent group relative " /* 'group' ক্লাস যোগ করা হয়েছে এবং 'relative' পজিশন আন্ডারলাইনের জন্য */
            key={idx}
            href={item.link}
          >
            {item.name}
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-700 to-purple-800 w-0 group-hover:w-full transition-all duration-300`} /* আন্ডারলাইনের জন্য 'absolute', 'bottom-0', 'left-0', 'h-0.5', 'w-0', 'group-hover:w-full' এবং ট্রানজিশন যোগ করা হয়েছে */
            ></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
