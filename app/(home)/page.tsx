import Header from "@/components/Header";
import React from "react";
import "../globals.css";
import Link from "next/link";

function page() {
  return (
    <div className="  h-screen flex justify-center items-centerS bg-[#212121] w-full ">
      <div className=" max-w-3xl h-[99vh] border-dotted border-2 border-slate-600 border-y-0   w-full overflow-y-auto no-scrollbar ">
        <Header />

        <AboutMe />
        <Projects />

        <Experience />

        <footer className="px-5 pt-10 pb-5 text-white font-extralight border-b-2 flex justify-between">
          <div>
            Made by{" "}
            <Link
              href={"https://www.x.com/sanyogsr"}
              target="_blank"
              className="hover:text-blue-400"
            >
              Sanyog
            </Link>
          </div>
          <h1>Thanks for visiting</h1>
        </footer>
      </div>
    </div>
  );
}

export default page;

function AboutMe() {
  return (
    <div className="flex flex-col px-5 py-10 text-white gap-6 items-start  border-b border-slate-600  pb-3  max-w-3xl mx-auto">
      <h1 className="text-2xl font-extralight border-b border-slate-50 pb-2 hover:border-dashed hover:border-b-2   ">
        About me
      </h1>
      <p className="leading-relaxed font-light tracking-wide text-gray-300">
        I&apos;m a full-stack developer passionate about crafting modern,
        user-friendly web applications. I focus on delivering efficient
        solutions and continuously enhancing my skills.
      </p>
    </div>
  );
}
function Experience() {
  return (
    <div className="flex flex-col px-5 py-10 text-white gap-6 items-start  border-b border-slate-600  pb-2  max-w-3xl mx-auto">
      <h1 className="text-2xl font-extralight border-b border-slate-50 pb-2 ">
        Experience
      </h1>
      <div
        className=" font-extralight mt-5
    "
      >
        <h1 className=" text-2xl">
          Frontend developer -{" "}
          <Link
            href={"https://www.etherverse.in"}
            target="_blank"
            className="hover:text-green-400"
          >
            Etherverse
          </Link>
        </h1>

        <p className="leading-relaxed font-extralights tracking-wide text-gray-300 mt-3">
          In etherverse i was working mostly on the frontend , where i coded
          multiple pages and some of them i customized with Tailwindcss. I
          worked on Nextjs ,Tailwindcss mostly, but Also connected the email
          services like Mailchimp from frontend to backend.
        </p>
      </div>
    </div>
  );
}
function Projects() {
  return (
    <div className="flex flex-col px-5 py-5 text-white gap-6 items-start max-w-3xl mx-auto border-b border-slate-600">
      <h1 className="text-2xl font-extralight border-b border-slate-50 pb-2 hover:border-dashed hover:border-b-2 ">
        Projects
      </h1>
      <div className="flex flex-wrap justify-center  w-full gap-10">
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4">
          sdhsd
        </div>
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4 ">
          Project 2
        </div>
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4 ">
          Project 2
        </div>
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4 ">
          Project 2
        </div>
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4 ">
          Project 2
        </div>
        <div className="min-h-[20rem] min-w-[21rem] border-double border-2  flex flex-col items-center pt-4 ">
          Project 2
        </div>
      </div>
    </div>
  );
}
