import React from "react";
import classes from "./Form.module.scss";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  value: string;
  register: any;
  validation: any;
  error?: any;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  name,
  type,
  register,
  validation,
  error,
  value,
}) => {
  return (
    <div className={classes["form-group"]}>
      <label className={classes.label}>{label}:</label>
      <input
        type={type}
        name={name}
        {...register(name, validation)}
        value={value}
        className={classes.input}
      />
      {error && <p className={classes.error}>{error.message}</p>}
    </div>
  );
};

export default FormInput;
