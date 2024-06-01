import React from "react";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main className="text-base lg:text-xl lg:font-medium lg:mx-6 bg-white/20 isolate shadow-lg ring-1 ring-black/5 h-auto mx-1.5 p-6">
      <h1 className="text-center text-3xl font-bold">
        These are all the ways to contact me.
      </h1>
      <div className="flex flex-col items-center gap-2 mt-4">
        <p>Email: phutawannitsawang@gmail.com</p>
        <p>Phone: 066-109-1697</p>
        <p>
          Github:
          <Link
            className="text-blue-700 underline pl-1"
            href="https://github.com/unknowguy2001"
            target="_blank"
          >
            github.com/unknowguy2001
          </Link>
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
