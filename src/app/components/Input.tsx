import {
  ComponentPropsWithoutRef,
  LegacyRef,
  forwardRef,
  ChangeEvent,
} from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  error?: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input = (
  { value, error, handleInputChange, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined
) => {
  return (
    <div className="flex flex-col shadow-md py-4">
      <label className="text-white text-md mb-2">enter your number</label>
      <input
        {...props}
        value={value}
        onChange={handleInputChange}
        className={`shadow-md rounded-lg py-2 px-4 ${
          error ? "border border-solid border-red-500" : ""
        }`}
        ref={ref}
      />
      {error ? <p className="text-red-500 text-xs py-2">{error}</p> : ""}
    </div>
  );
};

export default forwardRef<HTMLInputElement, InputProps>(Input);
