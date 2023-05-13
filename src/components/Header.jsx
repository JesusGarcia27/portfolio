import React from "react";

const Header = () => {
  return (
    <section className="text-white relative px-4 sm:max-w-[640px] mx-auto sm:grid sm:grid-cols-2 lg:max-w-[1024px] dark:text-violet-950 ">
      <div className="mx-auto right-1/2 translate-x-2 sm:right-1/2 sm:mt-10 lg:mb-14">
        <img className="w-full" src="/images/im1.png" alt="" />
        
        <img className="absolute top-32 w-[150px] right-2 transition transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 lg:w-[210px] " src="/images/Image.png" alt="" />
        <img className="absolute bottom-4 left-6 animate-bounce -z-10 " src="/images/Ellipse5.png" alt="" />
        <img className="absolute top-4 animate-bounce -z-20 " src="/images/Ellipse2.png" alt="" />
        <img className="absolute right-8 top-20 animate-bounce " src="/images/Ellipse3.png" alt="" />
        <img className="absolute right-1 top-2 animate-bounce " src="/images/Ellipse6.png" alt="" />
        <hr className="border-[4px] border-violet-600/50 rounded-lg left-5 -translate-x-2 shadow-md shadow-violet-400 dark:shadow-md dark:shadow-violet-950 dark:border-violet-950" />
      </div>

      <section className="px-2 lg:grid lg:items-center lg:p-4 sm:mx-2 ">
        <h2 className="text-3xl mt-6 sm:text-4xl lg:text-6xl">
          I'm Jesus Garcia. A fronted developer <span className="text-violet-500/80 dark:text-violet-700">based in Colombia</span>
        </h2>
        <p className="mt-4">
          I am a very passionate person in my work, if you have a project and
          need good skills, I am ready. I never give up and what interests me
          most is the quality in the details.
        </p>

        <button className="p-2 bg-violet-600/40 rounded-lg px-3 mt-2 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 dark:text-white dark:bg-violet-950">
            Click here
        </button>
      </section>
    </section>
  );
};

export default Header;
