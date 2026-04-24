"use client";
import { useTranslation } from "react-i18next";
// import { BIO } from "../constants";
import { motion } from "framer-motion";

const Bio = () => {
  const {t}=useTranslation()
  return (
    <section className="flex max-w-4xl flex-col gap-12 pt-20" id="bio">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-3xl lg:text-4xl"
      >
        {t("title")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* {BIO.map((bio, index) => ( */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, delay: 0.5 }}
            // key={index}
            className="mb-4 text-lg lg:text-xl"
          >
            {t("bio")}
          </motion.p>
        {/* ))} */}
      </motion.div>
    </section>
  );
};

export default Bio;
