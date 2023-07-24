import { ReactNode } from "react";

interface IButton {
  handleButtonClick: () => void;
  children: ReactNode;
}

const Button = ({ handleButtonClick, children }: IButton) => {
  return (
    <button
      onClick={handleButtonClick}
      className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:scale-105 mb-2 w-[250px]"
    >
      {children}
    </button>
  );
};

export default Button;
