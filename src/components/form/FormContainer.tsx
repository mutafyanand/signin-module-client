import React from "react";
import FormInput from "./FormInput";
import FormFooter from "./FormFooter";
import { useForm } from "react-hook-form";

interface InputConfig {
  label: string;
  name: string;
  type: string;
}

interface FooterConfig {
  buttonText: string;
  linkText: string;
  linkTo: string;
}

interface FormContainerProps {
  inputs: InputConfig[];
  footer: FooterConfig;
  onSubmit: (data: Record<string, string>) => void;
}

const FormContainer: React.FC<FormContainerProps> = ({
  inputs,
  footer,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm();

  const handleFormSubmit = async (data: Record<string, string>) => {
    const isValid = await trigger();

    if (isValid) {
      onSubmit(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {inputs.map((input: any) => (
        <FormInput
          key={input.name}
          {...input}
          register={register}
          error={errors[input.name]}
        />
      ))}
      <FormFooter {...footer} />
    </form>
  );
};

export default FormContainer;
