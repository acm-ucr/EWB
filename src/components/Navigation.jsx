"use client";
import Navbar from "react-bootstrap/Navbar";
import blueLogo from "../../public/assets/blueLogo.svg";
import Link from "next/link";
import Image from "next/image";
import { navigation } from "../data/navigation";
import Nav from "react-bootstrap/Nav";
import { useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { FaBars } from "react-icons/fa";

const Navigation = () => {
  const [selected, setSelected] = useState("");

  return (
    <Navbar
      collapseOnSelect
      expand="md"
      fixed="top"
      className="w-full h-16 md:h-[8vh] flex pb-10 font-playfair !bg-white justify-between items-center"
    >
      <Navbar.Brand className="p-0 h-full">
        <Link
          onClick={() => setSelected("")}
          href="/"
          className="items-center flex ml-3 h-full"
        >
          <Image src={blueLogo} className="h-full" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle
        className="list-unstyled !text-transparent border-0"
        aria-controls="basic-navbar-nav"
      >
        <FaBars className="text-ewb-blue-200 text-xl" />
      </Navbar.Toggle>
      <Navbar.Collapse className="items-center md:justify-end justify-center">
        <Nav className="mb-2 no-underline text-lg flex items-center gap-2 mr-4">
          {navigation.map((item, index) => (
            <div key={index}>
              {item.sub.length > 0 ? (
                <NavDropdown
                  onClick={() => setSelected(item.name)}
                  className="[&>*]:!border-0 [&>*]:!p-0 [&>*]:!m-0 [&>*]:!bg-transparent"
                  title={
                    <span
                      className={`hover:cursor-pointer rounded-full mb-0 py-1 px-4 no-underline !text-black text-lg whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                        selected === item.name &&
                        "!bg-ewb-blue-200 rounded-full text-white hover:!text-white"
                      }`}
                    >
                      {item.name}
                    </span>
                  }
                >
                  {item.sub.map((country, index) => (
                    <NavDropdown.Item
                      key={index}
                      className="text-white hover:!bg-ewb-green !bg-ewb-blue-200 first:!mt-5"
                      href={"/projects" + country.link}
                    >
                      {country.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  as={Link}
                  key={index}
                  href={item.link}
                  onClick={() => setSelected(item.name)}
                  className={`hover:cursor-pointer rounded-full mb-0 py-0 px-4 no-underline !text-black text-lg whitespace-nowrap !font-normal hover:!text-blue-600 duration-300 ${
                    selected === item.name &&
                    "!bg-ewb-blue-200 rounded-full text-white hover:!text-white"
                  }`}
                >
                  {item.name}
                </Nav.Link>
              )}
            </div>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
