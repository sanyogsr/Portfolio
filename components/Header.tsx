import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex justify-between px-5 pt-5 text-white border-b border-slate-600  pb-3">
      <div className="text-2xl font-extralight">Sanyog Singh Rajput</div>
      <div className="flex gap-5 items-center">
        <Link href={"https://www.github.com/sanyogsr"} target="_blank">
          {" "}
          <div className="flex items-center gap-1 cursor-pointer">
            <Github size={20} />
            <h2>Github</h2>
          </div>
        </Link>
        <Link href={"https://www.x.com/sanyogsr"}>
          <div className="flex items-center  cursor-pointer gap-1">
            <Twitter size={20} />
            <h2>Sanyogsr</h2>
          </div>
        </Link>
        <Link href={"https://www.linkedin.com/in/sanyogsr"}>
          <div className="flex items-center  cursor-pointer gap-1">
            <Linkedin size={20} />
            <h2>Sanyogsr</h2>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default Header;
