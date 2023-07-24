import Link from "next/link";

export default function Home() {
  return (
    <main className=" container m-auto  h-[100vh] w-[100vw] flex justify-center items-center">
      <div className="text-white  w-1/2 h-1/2 flex flex-col justify-center items-center gap-1">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl">FutureMe challenge</h1>
          <h3 className="text-lg">Fibonacci with emojis🤘🏼</h3>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <p>click below to be directed</p>
          <Link href="/fibonaci" className="text-purple-600 decoration-current">
            To test
          </Link>
        </div>
      </div>
    </main>
  );
}
