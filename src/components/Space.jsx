import React from "react";
import Work from "./pages/Work";

const Space = () => {
  return (
    <section
      id="work"
      className="text-white py-12 sm:max-w-[640px] mx-auto sm:text-center lg:max-w-[1024px] dark:text-violet-950"
    >
      <article className="px-10 lg:grid lg:grid-cols-2 lg:gap-2 ">
        <h3 className="font-bold text-3xl sm:text-4xl lg:col-start-2 lg:my-20 lg:text-5xl">
          <span className="text-violet-500/80 lg:text-5xl dark:text-violet-700">
            Last landing{" "}
          </span>
          and website projects
        </h3>
        <p className="text-lg font-light mt-6 mb-6 sm:text-xl lg:col-start-2 lg:-my-52 lg:text-3xl">
          Cheer up and live my projects, know my work.
        </p>
        <img
          className="px-16 transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl lg:col-start-1 lg:row-start-1"
          src="/images/pokedex1.png"
          alt=""
        />
        <button className="border-[1px] border-white rounded-lg px-3 mt-10 py-2 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-2xl dark:text-white dark:bg-violet-950 ">
          <a target="_blank" href="https://pokedexproyect23.netlify.app">
            Click here
          </a>{" "}
        </button>
      </article>

      <article className="px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-2">
        <h3 className="font-bold text-3xl sm:text-4xl lg:col-start-1 lg:row-start-1 lg:my-20 lg:text-5xl">
          <span className="text-violet-500/80 lg:text-5xl dark:text-violet-700">
            Build{" "}
          </span>
          a whole new world
        </h3>
        <p className="text-lg font-light mt-6 mb-6 sm:text-xl lg:col-start-1 lg:-my-44 lg:text-3xl">
          We are in the era of digitization, it is time to team up and create
          great things.
        </p>
        <a href=""></a>
        <img
          className="px-20 transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl lg:col-start-2 lg:row-start-1 lg:"
          src="/images/morty1.png"
          alt=""
        />
        <button className="border-[1px] border-white rounded-lg px-3 mt-10 py-2 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-2xl dark:text-white dark:bg-violet-950 ">
          <a
            target="_blank"
            href="https://rick-and-morty-proyect-universe.netlify.app"
          >
            Click here
          </a>{" "}
        </button>
      </article>
      <div className="text-center -mt-7">
        <button className="border-[2px] border-white rounded-lg px-3 mt-5 py-2 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-2xl dark:text-white dark:bg-violet-950 ">
          <a href="#Work">More Works</a>
        </button>
      </div>
      <Work />
    </section>
  );
};

export default Space;
