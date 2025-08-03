"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Switch } from "../ui/switch";
import { Button } from "../ui/button";
import { RiMenu3Fill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="py-4 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center sm:px-4 lg:px-8">
        {/* logo */}
        <div className="text-xl font-bold">
          <Link href="/">Daily News</Link>
        </div>
        {/* desktop menu */}
        <NavigationMenu className="hidden lg:flex text-sm">
          <NavigationMenuList>
            <NavigationMenuItem className="flex items-center space-x-8">
              <NavigationMenuLink
                href="/news"
                className={`${
                  pathname === "/news" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                News
              </NavigationMenuLink>

              <NavigationMenuLink
                href="/services"
                className={`${
                  pathname === "/services" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                <NavigationMenuTrigger className="text-gray-700">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="text-gray-600 shadow-md rounded-md px-5 py-4 space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/services/web-development"
                        className={`${
                          pathname === "/services/web-development"
                            ? "text-red-500 font-semibold"
                            : ""
                        } hover:text-red-500`}
                      >
                        Web Development
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/mobile-apps"
                        className={`${
                          pathname === "/services/mobile-apps"
                            ? "text-red-500 font-semibold"
                            : ""
                        } hover:text-red-500`}
                      >
                        Mobile Apps
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/seo"
                        className={`${
                          pathname === "/services/seo"
                            ? "text-red-500 font-semibold"
                            : ""
                        } hover:text-red-500`}
                      >
                        Seo
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/services/digital-marketing"
                        className={`${
                          pathname === "/services/digital-marketing"
                            ? "text-red-500 font-semibold"
                            : ""
                        } hover:text-red-500`}
                      >
                        Digital Marketing
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/about"
                className={`${
                  pathname === "/about" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                About
              </NavigationMenuLink>
              <NavigationMenuLink
                href="/contact"
                className={`${
                  pathname === "/contact" ? "text-red-500 font-semibold" : ""
                } hover:text-red-500`}
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* color switcher and login button */}

        <div className="hidden lg:flex items-center space-x-4">
          <div className="flex items-center">
            <span className="mr-2">Dark Mode</span>
            <Switch />
          </div>
          <Button variant="default">Login</Button>
        </div>

        {/* mobile hamburger menu */}
        <MobileMenu />
      </nav>
    </header>
  );
};

export default Navbar;
