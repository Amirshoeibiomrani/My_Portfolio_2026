"use client";
import Link from "next/link";
import React, { useState } from "react";
// import '../../i18n'
import logo from "../assets/logo.png";
import { NAVIGATION_LINKS } from "../constants";
import Image from "next/image";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };


    const {
    i18n: { changeLanguage, language},
  } = useTranslation();

  const onChangeLocale = (e) => {
    const { value } = e.target;
    changeLanguage(value);
  };


  return (
    <section className="scroll-mt-20">
      <nav className="fixed left-0 right-0 top-4 z-50">
        {/* Desktop Menu */}
        <div className="mx-auto hidden max-w-2xl items-center justify-center border border-stone-50/30 bg-black/20 py-2 backdrop-blur-lg lg:flex rounded-lg ">
          <div className="flex items-center justify-between gap-6">
            <div className="ring-2 ring-white rounded-full p-2">
              <Link href="/">
                <Image src={logo} width={50} alt="logo" />
              </Link>
            </div>
            <div>
              <ul className="flex items-center gap-4">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm hover:text-yellow-400 "
                      onClick={(e) => handleLinkClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}

                <div>
                <select onChange={onChangeLocale} value={language}>
                  <option value='fa'>Persian</option>
                  <option value='en'>English</option>
                </select>
                </div>

              </ul>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div className="rounded-lg backdrop-blur-md lg:hidden">
          <div className="flex items-center justify-between">
            <div className="">
              <Link href="/">
                <Image src={logo} alt="logo" width={90} className="m-2" />
              </Link>
            </div>
            <div className="flex items-center">
              <button
                className="focus:outline-none lg:hidden"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="m-2 h-6 w-5" />
                ) : (
                  <FaBars className="m-2 h-6 w-5 " />
                )}
              </button>
            </div>
          </div>
          {isMobileMenuOpen && (
            <ul className="ml-4 mt-4 flex flex-col gap-4 backdrop-blur-md">
              {NAVIGATION_LINKS.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className="block w-full text-lg"
                    onClick={(e) => handleLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
