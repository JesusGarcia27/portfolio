import React from "react";

const Work = () => {
  return (
    <section id="Work" className=" py-16 text-center text-white">
      <section className=" bg-gray-900 rounded-xl py-5 mx-10 sm:flex sm:py-0 sm:px-2 sm:max-w-[640px] lg:max-w-[1024px] sm:mx-auto dark:bg-gray-400 ">
        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <div className="flex justify-center">
            <img
              className="box-border h-40 w-40 p-2 text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50 "
              src="/images/ecommerce.png"
              alt=""
            />
          </div>
          <h3 className="py-4 mx-2 font-light">
            Ecommerce of products, where you can add to the cart, buy and much
            more
          </h3>
          <button className="border-[1px] border-white rounded-lg px-2 mt-1 py-1 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-sm ">
            <a target="_blank" href="https://ecommerce-proyect.netlify.app">
              Click Here
            </a>
          </button>
        </article>

        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <div className="flex justify-center">
            <img
              className="box-border h-40 w-40 p-2 text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"
              src="/images/carrito.png"
              alt=""
            />
          </div>
          <h3 className="py-4 mx-2 font-light">
            Functional app with HTML, CSS and JavaScript, shopping cart
            simulation
          </h3>
          <button className="border-[1px] border-white rounded-lg px-2 mt-1 py-1 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-sm ">
            <a target="_blank" href="https://carcluster07.netlify.app">
              Click Here
            </a>
          </button>
        </article>

        <article className="bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <div className="flex justify-center">
            <img
              className="box-border h-40 w-40 p-2 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"
              src="/images/formulario.png"
              alt=""
            />
          </div>
          <h3 className="py-4 mx-2 font-light">
            Functional forms where you can register, update and delete users
          </h3>
          <button className="border-[1px] border-white rounded-lg px-2 mt-1 py-1 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-sm ">
            <a target="_blank" href="https://formusersstart.netlify.app">
              Click Here
            </a>
          </button>
        </article>

        <article className=" bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <div className="flex justify-center">
            <img
              className="box-border h-40 w-40 p-2 text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"
              src="/images/clima.png"
              alt=""
            />
          </div>
          <h3 className="py-4 mx-2 font-light">
            Weather app, takes your location and gives you your temperature
          </h3>
          <button className="border-[1px] border-white rounded-lg px-2 mt-1 py-1 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-sm ">
            <a target="_blank" href="https://weatherappcol.netlify.app">
              Click Here
            </a>
          </button>
        </article>

        <article className=" bg-gray-600/40 dark:bg-gray-600 mx-6 py-10 my-5 rounded-xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:mx-2 sm:w-[400px] sm:py-6  ">
          <div className="flex justify-center">
            <img
              className="box-border h-40 w-40 p-2 text-4xl transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:text-violet-500/50"
              src="/images/universo.png"
              alt=""
            />
          </div>
          <h3 className="py-4 mx-2 font-light">
            Fortune cookie app, discover your luck
          </h3>
          <button className="border-[1px] border-white rounded-lg px-2 mt-1 py-1 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-sm ">
            <a target="_blank" href="https://universemisteries.netlify.app">
              Click Here
            </a>
          </button>
        </article>
      </section>
    </section>
  );
};

export default Work;
