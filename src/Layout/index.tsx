"use client";
import MySwitch from "@/components/ui/MyButton";
import MyImage from "../assets/chick.png";;

import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

export function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Project", link: "#project" },
    { name: "Footer", link: "#footer" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-screen">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          {/* <NavbarLogo /> */}
          {/* <div>
            <img src={MyImage} alt="sticker"/>
          </div> */}
          <NavItems items={navItems}/>
          <img src={MyImage} alt="../assets/chick.png" className="w-30 h-30"/>

          <div className="flex items-center gap-20 ">
            <Link to="https://t.me/Kimleng_hean">
              <NavbarButton variant="primary">Contact</NavbarButton>
            </Link>
            {/* Theme toggle should usually be global, but works here too */}
            <MySwitch />
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative px-2 py-2 text-lg text-neutral-700 dark:text-neutral-200 hover:text-primary"
              >
                {item.name}
              </a>
            ))}

            <div className="flex w-full flex-col gap-4 mt-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
              >
                Contact
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
export default NavbarDemo;