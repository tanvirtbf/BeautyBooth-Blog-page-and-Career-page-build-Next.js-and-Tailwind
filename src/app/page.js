import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col gap-4">
      <h1 className="text-6xl text-center text-orange-400">Hello World!</h1>
      <Link href={"/career"} className="homeBtn">Career Page</Link>
      <Link href={"/blog"} className="homeBtn">Blog Page</Link>
    </div>
  );
}
