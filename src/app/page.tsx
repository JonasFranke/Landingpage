import GithubLogoComponent from "@/app/assets/GithubLogoComponent";
import InstagramLogoComponent from "@/app/assets/InstagramLogoComponent";
import Link from "next/link";
import SpotifyLogoComponent from "@/app/assets/SpotifyLogoComponent";

export default function Home() {
  return (
      <>
        <main className="overflow-hidden">
            <p className="text-green-700 text-center font-extrabold text-4xl mt-32 hover:animate-zoomInOut">Jonas Franke</p>
            <div className="flex justify-center items-center relative mt-32">
                <GithubLogoComponent githubLink="https://github.com/jonasfranke"/>
                <InstagramLogoComponent instaLink="https://instagram.com/jns.frnk"/>
                <SpotifyLogoComponent spotifyLink="https://open.spotify.com/user/313z6mjtm5ngodivuxxaza54rzfu?si=f00d403b755a4046"/>
            </div>
        </main>
        <footer className="bg-gray-950 text-white fixed bottom-0 p-6 sm:p-8 left-0 right-0 flex justify-center">
            <p className="font-mono text-green-500 sm:text-xs">©2023 Jonas Franke</p>
            <Link href="/imprint" className="fixed right-3"><button className="bg-blue-600 rounded p-1.5">Impressum</button></Link>
        </footer>
      </>
  );
}
