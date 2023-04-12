"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import { BiDollar } from "react-icons/bi";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
  formatPrice?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
  errors,
  id,
  label,
  register,
  disabled,
  formatPrice,
  required,
  type,
}) => {
  return (
    <div className="w-full relative">
      {formatPrice && (
        <BiDollar
          size={24}
          className="text-neutral-700 absolute top-5 left-2 "
        />
      )}

      <input
        id={id}
        disabled={disabled}
        {...register(id, { required })}
        placeholder=" "
      />
    </div>
  );
};
export default Input;
