"use client";
import { FunctionComponent, useState, ChangeEvent } from "react";
import fibonacciWithEmojis from "../utils";

import { TrashIcon } from "@heroicons/react/24/outline";
interface FibonacciPageProps {}
const FibonacciPage: FunctionComponent<FibonacciPageProps> = () => {
  const [error, setError] = useState(false);

  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [results, setResults] = useState<string[]>([inputValue]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (typeof value !== Number) {
      setError(true);
    }
    setInputValue(value);
  };

  const handleButtonClick = () => {
    const number = parseInt(inputValue, 10);
    if (!isNaN(number)) {
      const sequence = fibonacciWithEmojis(number);
      setResult(sequence);
      setResults((prevResults) => [...prevResults, sequence]);
      console.log(inputValue);
    }
  };

  const handleRemove = (i: number) => {
    const resUpdated = [...results];
    resUpdated.splice(i, 1);
    setResults(resUpdated);
  };

  return (
    <div className="flex flex-col justify-center items-center container m-auto h-[100vh]">
      <div className="flex flex-col shadow-md py-4">
        <label className="text-white text-md mb-2">enter your number</label>
        <input
          value={inputValue}
          onChange={handleInputChange}
          className="shadow-md rounded-lg py-2 px-4"
        />
      </div>
      <button
        onClick={handleButtonClick}
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-lg mt-2 hover:scale-105 mb-2"
      >
        LETS GO
      </button>
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
