"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Button1 from "../Buttons/Button1";
import { useState } from "react";

const Navbar = () => {
  const [IsMobileNav, setIsMobileNav] = useState(false);


  useEffect(()=> {

    if(IsMobileNav){
      window.document.body.style.overflow = "hidden"
    }else{
      window.document.body.style.overflow = "visible"
    }


  },[IsMobileNav])


  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-4 md:px-10 py-8  ">
        <div>
          <img src="./nav/logo.png" alt="" />
        </div>

        <div className=" flex items-center gap-10">
          {/* desktop navigation */}
          <div className="  hidden md:flex items-center gap-10 text-lg text-white">
            <Link href={"/"}>Marketplace</Link>
            <Link href={"/"}>Rankings</Link>
            <Link href={"/"}>Connect a wallet</Link>
          </div>

          {/* mobile navigation bar */}
          <div
            className={`flex items-center flex-col gap-10 absolute transition-all duration-500  ${
              IsMobileNav ? "left-0" : "-left-full"
            }  top-0 h-screen justify-center bg-[#3b3b3b]  py-7 px-4 w-full md:hidden text-lg text-white`}
          >
            {IsMobileNav && (
              <svg
                
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className=" absolute top-8 right-8 border rounded-full cursor-pointer lucide lucide-chevron-left"
                onClick={()=>setIsMobileNav(false)}
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            )}


            <Link className=" hover:bg-[#2b2b2b] px-8 py-1 rounded-xl" href={"/"}>Marketplace</Link>
            <Link className=" hover:bg-[#2b2b2b] px-8 py-1 rounded-xl" href={"/"}>Rankings</Link>
            <Link className=" hover:bg-[#2b2b2b] px-8 py-1 rounded-xl" href={"/"}>Connect a wallet</Link>
          </div>

          <div className="hidden md:block">
            <Button1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 3.125C7.58375 3.125 5.625 5.08375 5.625 7.5C5.625 9.91625 7.58375 11.875 10 11.875C12.4162 11.875 14.375 9.91625 14.375 7.5C14.375 5.08375 12.4162 3.125 10 3.125ZM4.375 7.5C4.375 4.3934 6.8934 1.875 10 1.875C13.1066 1.875 15.625 4.3934 15.625 7.5C15.625 10.6066 13.1066 13.125 10 13.125C6.8934 13.125 4.375 10.6066 4.375 7.5Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.0001 13.124C8.57374 13.124 7.17251 13.4995 5.93728 14.2128C4.70205 14.926 3.67634 15.9518 2.96327 17.1872C2.79071 17.4861 2.40848 17.5886 2.10953 17.416C1.81058 17.2435 1.70812 16.8612 1.88068 16.5623C2.70345 15.1369 3.88696 13.9532 5.31223 13.1303C6.7375 12.3073 8.3543 11.874 10.0001 11.874C11.6459 11.874 13.2627 12.3073 14.688 13.1303C16.1132 13.9532 17.2968 15.1369 18.1195 16.5623C18.2921 16.8612 18.1896 17.2435 17.8907 17.416C17.5917 17.5886 17.2095 17.4861 17.0369 17.1872C16.3239 15.9518 15.2982 14.926 14.0629 14.2128C12.8277 13.4995 11.4265 13.124 10.0001 13.124Z"
                  fill="white"
                />
              </svg>
              Sign Up
            </Button1>
          </div>

          <div className="block md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className=" cursor-pointer"
              onClick={() => setIsMobileNav(!IsMobileNav)}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                fill="white"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
