import { useState } from "react";

function NavLink({ to, children }) {
  return (
    <a href={to} className={`mx-4 `}>
      {children}
    </a>
  );
}

function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${
        open ? "-translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md bg-gradient-to-r from-purple-200`}
    >
      <div className="flex items-center justify-center filter drop-shadow-md bg-gradient-to-r from-purple-200 h-20">
        {/*Home container*/}
        <a className="text-xl font-semibold font-mono" href="/">
          Home
        </a>
      </div>
      <div className="flex flex-col ml-4">
        <a
          className="text-xl font-mono my-4"
          href="/about"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          About Me
        </a>
        <a
          className="text-xl font-mono my-4"
          href="/interesting"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Interesting Facts
        </a>
        <a
          className="text-xl font-mono my-4"
          href="/projects"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Projects
        </a>
        <a
          className="text-xl font-mono my-4"
          href="/media"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Media
        </a>
        <a
          className="text-xl font-mono my-4"
          href="/contact"
          onClick={() =>
            setTimeout(() => {
              setOpen(!open);
            }, 100)
          }
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex filter drop-shadow-md bg-gradient-to-r from-purple-200 px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center ">
        <a className="text-2xl font-mono font-semibold " href="/">
          Home
        </a>
      </div>
      <div className="w-9/12 flex justify-end items-center ">
        <div
          className="flex relative w-8 h-8 flex-col justify-between items-center md:hidden "
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out  ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden md:flex font-mono font-semibold ">
          <NavLink to="/about">About Me</NavLink>
          <NavLink to="/interesting">Interesting Facts</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </div>
      </div>
    </nav>
  );
}
