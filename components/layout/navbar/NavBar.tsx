"use client";
import logoImg from "@/public/vercel.svg";
import {
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { Menu, NavBarItem } from "./";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarBrand>
        <Image
          src={logoImg}
          alt="Tailwind Logo"
          width={30}
          priority
          className="h-auto object-cover"
        />
        <Link href="/" className="ml-3 text-xl font-bold">
          Tailwind Logo
        </Link>
      </NavbarBrand>
      <NavBarItem />

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
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
