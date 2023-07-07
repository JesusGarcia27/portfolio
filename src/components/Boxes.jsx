import React from "react";

const Boxes = () => {
  return (
    <section className="py-16 text-center text-white">
      <section className="bg-gray-900 rounded-xl py-5 mx-10 sm:flex sm:py-0 sm:px-2 sm:max-w-[640px] lg:max-w-[1024px] sm:mx-auto dark:bg-gray-400">
        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <i className="bx bxl-javascript text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"></i>
          <h3 className="py-4 mx-2 font-light">
            Handling JavaScript for the logic of my applications
          </h3>
        </article>

        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <i className="bx bxl-html5 text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"></i>
          <h3 className="py-4 mx-2 font-light">
            Handling HTML code that is the basis for creating apps
          </h3>
        </article>

        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <i className="bx bxl-react text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"></i>
          <h3 className="py-4 mx-2 font-light">
            Responsive and aesthetic design generated with React
          </h3>
        </article>

        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <i className="bx bxl-nodejs text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"></i>
          <h3 className="py-4 mx-2 font-light">
            Backend management with node.js creation of functional apis
          </h3>
        </article>
      </section>
    </section>
  );
};

export default Boxes;
