import Image from "next/image";
import React from "react";
import logo from "../../../public/logo.png";
const Footer = () => {
  return (
    <div className="bg-base-300 text-base-content">
      <footer className="footer sm:footer-horizontal w-11/12 mx-auto p-10">
        <aside>
          <Image src={logo} width={70} height={40} alt="Logo"></Image>
          <p className="font-semibold">Tech Gadget Store Ltd.</p>
          <p>
            Copyright © {new Date().getFullYear()} TechGadget Store — All Rights
            Reserved
          </p>
        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
