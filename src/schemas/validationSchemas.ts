export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    message: "Invalid email address",
  },
};

export const nameValidation = {
  required: "Name is required",
  minLength: {
    value: 2,
    message: "Name should be at least 2 characters",
  },
  pattern: {
    value: /^[A-Za-z]+$/i,
    message: "Name should only contain letters",
  },
};

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 8,
    message: "Password should be at least 8 characters",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).*$/,
    message:
      "Password must contain at least 1 letter, 1 number, and 1 special character.",
  },
};
