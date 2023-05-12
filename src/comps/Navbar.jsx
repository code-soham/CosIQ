import { useState } from "react";
import Anc from "./NavAnchor";
const dpData = [
  {
    text: "SHE.E.O",
    href: "#",
  },
  {
    text: "Blog",
    href: "#",
  },
  {
    text: "FAQ",
    href: "#",
  },
  {
    text: "Knowledge Base",
    href: "#",
  },
  {
    text: "About",
    href: "#",
  },
  {
    text: "Flashcards",
    href: "#",
  },
];
export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <nav className="h-16 text-white bg-black flex justify-between">
        <div className="flex items-center mx-10 font-extrabold">Pepcorns</div>
        <div className="hidden md:flex items-center mx-10">
          <Anc href="#" text="Home" />
          <Anc href="#" text="Raise Funding" />
          <Anc dpdown={true} text="Learn" dpData={dpData} />
        </div>
        <div className="hidden md:flex items-center mx-10 text-sm">
          <button
            className="transition-all duration-300 hover:bg-white hover:text-black px-3 py-1 mx-3"
            href="#"
          >
            Login
          </button>
          <button
            className="transition-all duration-300 bg-white hover:bg-black border-white border text-black hover:text-white px-3 py-1"
            href="#"
          >
            Get Started
          </button>
        </div>
        <i
          className="flex items-center mx-10 md:hidden bx bx-menu text-2xl"
          onClick={() => setSidebar(!sidebar)}
        ></i>
      </nav>
      <div>
        {sidebar && (
          <>
            <div
              className="absolute h-full w-full bg-gray-700 bg-opacity-30"
              onClick={() => setSidebar(!sidebar)}
            ></div>
          </>
        )}
        <div
          className={`fixed top-0 left-0 w-1/2 max-w-sm h-screen transition-all ${
            sidebar ? "translate-x-0" : "-translate-x-full"
          }  bg-black flex flex-col text-white`}
        >
          <div className="flex items-center justify-between h-20 text-left p-3 text-xl font-black align">
            <span>Pepcorns</span>
            <i
              className="bx bx-x text-white text-2xl m-5"
              onClick={() => setSidebar(!sidebar)}
            ></i>
          </div>
          <div className="flex flex-col text-left">
            <Anc href="#" text="Home" />
            <Anc href="#" text="Raise Funding" />
            <button
              className="transition-all text-sm w-fit ml-4 duration-300 hover:bg-white hover:text-black px-3 py-1 mx-3"
              href="#"
            >
              Login
            </button>
            <button
              className="transition-all text-sm w-fit ml-4 duration-300 bg-white hover:bg-black border-white border text-black hover:text-white px-3 py-1"
              href="#"
            >
              Get Started
            </button>
            <Anc dpdown={true} alwaysOpen={true} text="Learn" dpData={dpData} />
          </div>
        </div>
      </div>
    </>
  );
}
