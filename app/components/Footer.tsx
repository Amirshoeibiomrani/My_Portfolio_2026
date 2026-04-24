"use client";
import Image from "next/image";
import logo from "../assets/logo.png";
import { SOCIAL_MEDIA_LINKS } from "../constants";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mb-8 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <Image src={logo} width={350} className="my-20" />
      </motion.div>

      <div className="flex items-center justify-center gap-8">
        {SOCIAL_MEDIA_LINKS.map((link, index) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.5 }}
          >
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-sm tracking-wide text-gray-400">
        &copy;compileTab. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
