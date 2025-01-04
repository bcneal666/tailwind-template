"use client";
import logoImg from "@/public/vercel.svg";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { Menu, NavBarItem, Profile } from "./";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Link href="/">
          <Image
            src={logoImg}
            alt="Logo"
            width={30}
            height={30}
            className="h-[30px] w-[30px] object-contain"
          />
        </Link>
        <Link href="/" className="ml-3 text-xl font-bold">
          Logo
        </Link>
      </NavbarBrand>
      <NavBarItem />

      <NavbarContent justify="end">
        <Profile />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="lg:hidden"
        />
      </NavbarContent>
      <Menu />
    </Navbar>
  );
};

export default NavBar;
