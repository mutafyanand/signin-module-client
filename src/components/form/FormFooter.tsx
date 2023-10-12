import React from "react";
import { Link } from "react-router-dom";
import classes from "./Form.module.scss";
import { transformHyphenatedToTitle } from "../../utils/helpers";

interface FormFooterProps {
  buttonText: string;
  linkText: string;
  linkTo: string;
}

const FormFooter: React.FC<FormFooterProps> = ({
  buttonText,
  linkText,
  linkTo,
}) => {
  return (
    <div className={classes.footer}>
      <p>
        {linkText}{" "}
        <Link to={`/${linkTo}`}>{transformHyphenatedToTitle(linkTo)}</Link>
      </p>
      <button type="submit" className={classes["submit-btn"]}>
        {buttonText}
      </button>
    </div>
  );
};

export default FormFooter;
