"use client";
import React from "react";
import { EDUCATION } from "../constants";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const EducationSection = () => {
  const {t}=useTranslation()

  return (
    <section className="py-8" id="education">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-4 text-center text-3xl font-bold"
      >
        {t("education")}
      </motion.h2>
      {EDUCATION.map((edu, index) => (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: index * 0.5 }}
          key={index}
          className="mb-6 p-10"
        >
          <h3 className="text-xl font-semibold">{t("degree")}</h3>
          <p className="text-lg">{t("institution")}</p>
          <p className="text-sm text-stone-300">{t("duration")}</p>
          <p className="mt-2">{t("description")}</p>
        </motion.div>
      ))}
    </section>
  );
};

export default EducationSection;
