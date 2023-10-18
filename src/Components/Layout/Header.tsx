"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Header() {
  const [isScolll, setIsScroll] = useState<boolean>(false);

  const listenScrollEvent = () => {
    window.scrollY > 20 ? setIsScroll(true) : setIsScroll(false);
  };

  useEffect(() => {
    console.log("a");
    window.addEventListener("scroll", listenScrollEvent);
  });

  return (
    <>
      <Navbar
        className={isScolll ? "header-nav header-scrolled" : "header-nav"}
      >
        <NavbarBrand>
          <p className="" style={{ fontSize: "1.5rem", marginBottom: 0 }}>
            XUẤT KHẨU LAO ĐỘNG - DU HỌC
          </p>
        </NavbarBrand>
        <div className="list-header">
          <NavbarContent className="gap-4 sm:flex" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                TRANG CHỦ
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                GIỚI THIỆU
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                TIN TỨC
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Dropdown>
                <DropdownTrigger style={{ margin: 0 }}>
                  THỊ TRƯỜNG
                </DropdownTrigger>
                <DropdownMenu aria-label="Dropdown Variants" variant={"light"}>
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                LIÊN HỆ
              </Link>
            </NavbarItem>
          </NavbarContent>
        </div>
      </Navbar>
    </>
  );
}

export default Header;
