import GithubLogoComponent from "@/app/assets/GithubLogoComponent";
import InstagramLogoComponent from "@/app/assets/InstagramLogoComponent";
import Link from "next/link";

export default function Home() {
  return (
      <>
        <main className="">
            <p className="text-green-700 text-center font-extrabold text-4xl mt-32">Jonas Franke</p>
            <div className="flex justify-center items-center relative mt-32">
                <GithubLogoComponent/>
                <InstagramLogoComponent/>
            </div>
        </main>
        <footer className="bg-gray-950 text-white fixed bottom-0 p-6 left-0 right-0 flex justify-center">
            <p className="font-mono text-green-500">©2023 Jonas Franke</p>
            <Link href="/imprint" className="fixed right-3"><button className="bg-blue-600 rounded p-1.5">Impressum</button></Link>
        </footer>
      </>
  );
}
