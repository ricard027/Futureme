"use client";
import { FunctionComponent, useState, ChangeEvent } from "react";
//Components
import Input from "../components/Input";
import Button from "../components/Button";
import { TrashIcon } from "@heroicons/react/24/outline";
// Utilities
import fibonacciWithEmojis from "../utils";

interface FibonacciPageProps {}
const FibonacciPage: FunctionComponent<FibonacciPageProps> = () => {
  const [error, setError] = useState("");
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [results, setResults] = useState<string[]>([inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const numberValue = parseInt(value);
    if (isNaN(numberValue)) {
      setError("please enter a valid number");
      return;
    }
    setInputValue(value);
  };

  const handleButtonClick = () => {
    if (inputValue.length == 0) {
      setError("Please enter a number");
    }
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      const sequence = fibonacciWithEmojis(number);
      setResult(sequence);
      setResults((prevResults) => [...prevResults, sequence]);
      setError("");
      setInputValue("");
    }
  };

  const handleRemove = (i: number) => {
    const resUpdated = [...results];
    resUpdated.splice(i, 1);
    setResults(resUpdated);
  };

  return (
    <div className="flex flex-col justify-center items-center container m-auto h-[100vh]">
      <Input
        value={inputValue}
        handleInputChange={handleInputChange}
        error={error}
      />
      <Button handleButtonClick={handleButtonClick}>LETS GO</Button>

      <div className="flex flex-col gap-2 h-[500px] overflow-y-auto p-1 mt-4">
        {results
          .filter((result) => result.length > 0)
          .map((result, i) => (
            <p
              key={i}
              className="text-[#121212] py-2 px-4 w-[260px] rounded-lg bg-white flex justify-between"
            >
              {result}
              <TrashIcon
                width={20}
                className="cursor-pointer hover:text-red-600"
                onClick={() => handleRemove(i)}
              />
            </p>
          ))}
      </div>
    </div>
  );
};

export default FibonacciPage;
