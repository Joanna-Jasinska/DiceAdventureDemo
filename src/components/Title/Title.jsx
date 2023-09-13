import React from "react";
import PropTypes from "prop-types";
import css from "./Title.module.css";
export const Title = ({ title }) => <h2 className={css.title}>{title}</h2>;
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
