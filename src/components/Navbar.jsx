import React, { useState } from "react";

const Navbar = ({ setIsDark }) => {
  const handleChangeTheme = () => {
    setIsDark((isDark) => !isDark);
  };

  const [isShowNav, setIsShowNav] = useState(false);

  const handleShowNav = () => {
    setIsShowNav(!isShowNav);
  };

  return (
    <header className="flex justify-between py-4 px-2 text-white relative sm:p-4 sm:max-w-[640px] sm:mx-auto lg:max-w-[1024px] animate-slide-down z-50 dark:bg-white/90 mb-5">
      <img
        className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] sm:mt-4 dark:bg-violet-950/90 dark:rounded-lg cursor-pointer "
        src="images/1.png"
        alt="/"
      />
      <i
        onClick={handleShowNav}
        className="bx bx-menu text-2xl text-center mt-3 cursor-pointer sm:hidden dark:text-black"
      ></i>
      <i
        onClick={handleChangeTheme}
        className="bx bx-sun absolute right-12 mt-5 sm:mt-12 sm:right-[470px] cursor-pointer dark:text-black "
      ></i>

      <nav
        className={`text-white absolute top-full ${
          isShowNav ? "left-0" : "-left-full"
        } w-full grid text-lg px-2 gap-1 duration-300 bg-[#2225af86] rounded-lg sm:static sm:flex sm:w-auto sm:gap-6 sm:bg-[#0F103F] sm:justify-center sm:items-center dark:sm:bg-white/90 dark:text-black`}
      >
        <a
          className="mt-2 sm:mt-0 hover:bg-violet-900/60 p-2 rounded-lg sm:transition sm:transform sm:hover:-translate-y-4 sm:motion-reduce:transition-none motion-reduce:hover:transform-none sm:duration-300 hover:shadow-xl hover:shadow-violet-500/50 dark:hover:bg-violet-950 dark:hover:text-white"
          href="#header"
        >
          Experience
        </a>
        <a
          className="hover:bg-violet-900/60 p-2 rounded-lg sm:transition sm:transform sm:hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none sm:duration-300 hover:shadow-xl hover:shadow-violet-500/50 dark:hover:bg-violet-950 dark:hover:text-white"
          href="#work"
        >
          Work
        </a>
        <a
          className="hover:bg-violet-900/60 p-2 rounded-lg sm:transition sm:transform sm:hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none sm:duration-300 hover:shadow-xl hover:shadow-violet-500/50 dark:hover:bg-violet-950 dark:hover:text-white"
          target="_blank"
          href="https://www.facebook.com/sefjeanscolombia"
        >
          Graphic Designer of
        </a>
        <a
          className="mb-2 sm:mb-0 hover:bg-violet-900/60 p-2 rounded-lg sm:transition sm:transform sm:hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none sm:duration-300 hover:shadow-xl hover:shadow-violet-500/50 dark:hover:bg-violet-950 dark:hover:text-white"
          href="#footer"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
