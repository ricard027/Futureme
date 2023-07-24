import Link from "next/link";

export default function Home() {
  return (
    <main className=" container m-auto  h-[100vh] w-[100vw] flex justify-center items-center ">
      <div className="text-white  w-1/2 h-1/2 flex flex-col justify-center items-center gap-2  text-center">
        <div className="flex flex-col justify-center items-center py-2">
          <h1 className="text-6xl">
            Future
            <span className=" text-purple-500">Me</span>
          </h1>
          <h2 className="text-4xl">challenge</h2>
          <p className="text-lg py-2">Fibonacci with emojis🤘🏼</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center">
          <Link
            href="/fibonaci"
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4  rounded-lg"
          >
            LETS TO TEST
          </Link>
        </div>
      </div>
    </main>
  );
}
