import React from "react";
import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  Path,
} from "react-hook-form";
import Typography from "./Typography";

type InputBoxProps<T extends FieldValues> = {
  className?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  name: Path<T>;
  label?: string;
  type?: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  subtext?: string;
  onChangeCallback?: (value: string) => void;
};

function InputBox<T extends FieldValues>({
  subtext = "",
  className = "",
  style = {},
  placeholder,
  required = false,
  disabled = false,
  name,
  label,
  type = "text",
  register,
  errors,
  onChangeCallback,
}: InputBoxProps<T>) {
  return (
    <div
      className={`w-full flex text-sm md:text-base flex-col gap-1 ${className}`}
      style={style}
    >
      {label && (
        <label
          htmlFor={String(name)}
          className="text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <input
        id={String(name)}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        {...register(name, { required })}
        onChange={(e) => {
          register(name).onChange(e);
          onChangeCallback?.(e.target.value);
        }}
        className={`font-poppins w-full px-3 py-5 md:p-5 rounded-[19px] bg-[#323232] focus:outline-none focus:ring-1 ${
          errors[name]
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
        }`}
      />
      {errors[name] && (
        <Typography className="text-xs md:text-sm text-red-500">
          {/* {"\u00A0"} */}
          {errors[name]?.message?.toString() || " This field is required"}
        </Typography>
      )}
      {subtext && (
        <Typography className="text-xs md:text-sm text-green-300">
          {"\u00A0"}{" "}
          {errors[name]?.message?.toString() || " Username Available"}
        </Typography>
      )}
    </div>
  );
}

export default InputBox;
