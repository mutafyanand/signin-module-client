import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../schemas/validationSchemas";

interface InputConfig {
  label: string;
  name: string;
  type: string;
  validation: {
    required?: string;
    minLength?: {
      value: number;
      message: string;
    };
    pattern?: {
      value: RegExp;
      message: string;
    };
  };
}

interface InputConfigs {
  [key: string]: InputConfig;
}

const inputConfigs: InputConfigs = {
  email: {
    label: "Email",
    name: "email",
    type: "text",
    validation: emailValidation,
  },
  password: {
    label: "Password",
    name: "password",
    type: "password",
    validation: passwordValidation,
  },
  name: {
    label: "Name",
    name: "name",
    type: "text",
    validation: nameValidation,
  },
};

export const getFormInputs = (...fields: (keyof InputConfigs)[]) => {
  return fields.map((field) => inputConfigs[field]);
};
