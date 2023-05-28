import GithubLogoComponent from "@/app/assets/GithubLogoComponent";
import InstagramLogoComponent from "@/app/assets/InstagramLogoComponent";

export default function Home() {
  return (
    <main className="">
        <p className="text-green-700 text-center font-extrabold text-4xl mt-32">Jonas Franke</p>
        <div className="flex justify-center items-center relative mt-32">
            <GithubLogoComponent/>
            <InstagramLogoComponent/>
        </div>
    </main>
  )
}
