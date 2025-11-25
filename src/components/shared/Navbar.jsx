"use client";
import AuthContext from "@/provider/AuthContext";
import Image from "next/image";
import LogoImg from "../../../public/logo.png";
import Link from "next/link";
import { useContext } from "react";
import { toast } from "react-toastify";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  const links = (
    <div className="text-[#18px] flex flex-col md:flex-row font-semibold">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about-us">About us</Link>
      </li>
      <li>
        <Link href="/product">Products</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </div>
  );

  const handleSignOut = () => {
    logOut()
      .then(() => toast.success("LogOut Successful"))
      .catch((error) => toast.error(error.code));
  };
  return (
    <div className="bg-base-200 shadow-sm">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}{" "}
            </ul>
          </div>
          <div className="text-xl font-bold">
            <Link href={"/"}>
              <Image src={LogoImg} width={60} alt="Logo"></Image>
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center gap-2">
              <Link
                onClick={handleSignOut}
                href={"/register"}
                className="btn btn-primary"
              >
                Logout
              </Link>

              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} alt="Avatar" />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link href="/dashboard/add-product">Add Product</Link>
                  </li>
                  <li>
                    <Link href="/dashboard/manage-product">
                      Manage Products
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link href="/login" className="btn btn-accent">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
