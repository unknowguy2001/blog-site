import Image from "next/image";
import Profile from "../../public/profile.jpg";
import TitleHomePage from "@/components/TitleHomePage";

export default function Home() {
  return (
    <main className="text-base lg:text-xl lg:font-medium lg:mx-6 bg-white/20 isolate shadow-lg ring-1 ring-black/5 h-auto mx-1.5 p-6">
      <div>
        <h1 className="text-3xl text-center font-bold lg:text-6xl">
          Who am I ?
        </h1>
        <br />
        <TitleHomePage />
      </div>
      <div className="lg:flex lg:items-center mt-4">
        <div className="flex justify-center mt-4 lg:w-1/2">
          <Image
            className="rounded-full border-4 border-white"
            src={Profile}
            alt="My profile picture."
            width={150}
            height={150}
          ></Image>
        </div>
        <div className="mt-4 lg:w-1/2">
          <p>
            Hello guys! I am Boom. I have a dream that I want to be a good
            programmer. I like to spend most of my free time learning something
            new about programming and practicing my programming skills. and I
            hope one day I will be a good programmer, like my dream. Last but
            not least, I hope you will like my profile and my personal blog.
            Have a good day!
          </p>
        </div>
      </div>
    </main>
  );
}
