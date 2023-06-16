import React from "react";
import { motion } from "framer-motion";
import "./PageHeading.css";

const PageHeading = ({ text }) => {
  return (
    <motion.h1 animate={{ y: 9 }} className="pageTitle display-2">
      <strong>{text}</strong>
    </motion.h1>
  );
};

export default PageHeading;
