// src/utils.ts

const emojis = ["🚀", "☘️", "🧑🏼‍🚀", "🤘🏼", "🇧🇷"];

function fibonacciWithEmojis(n: number): string {
  function fibonacci(num: number): number {
    if (num <= 1) return num;
    return fibonacci(num - 1) + fibonacci(num - 2);
  }

  let result = "";
  for (let i = 0; i < n; i++) {
    const fibNum = fibonacci(i);
    if (fibNum % 2 === 0) {
      const emojiIndex = (fibNum / 2) % emojis.length;
      result += emojis[emojiIndex];
    } else {
      result += fibNum.toString();
    }
  }

  return result;
}

export default fibonacciWithEmojis;
