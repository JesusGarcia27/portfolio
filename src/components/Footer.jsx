import React from "react";

const Footer = () => {
  return (
    <section id="footer" className=" shadow-xl shadow-violet-500/50 rounded-lg">
      <article className="bg-gray-900/60 mt-20 text-center h-[150px] ">
        <section className="relative sm:max-w-[640px] mx-auto lg:max-w-[1024px]">
          <div className="mx-4 absolute top-10">
            <img className="w-[80px] h-[80px]" src="/images/1.png" alt="" />
          </div>
        </section>

        <section className="text-white flex justify-end px-4 gap-6 text-2xl sm:max-w-[640px] mx-auto lg:max-w-[1024px]">
          <div>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jesús-alejandro-garcia-medina-734770209/"
            >
              <i className="bx bxl-linkedin mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300"></i>
            </a>
          </div>
          <div>
            <a target="_blank" href="https://github.com/JesusGarcia27">
              <i className="bx bxl-github mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300"></i>
            </a>
          </div>
          <div>
            <a
              target="_blank"
              href="https://instagram.com/j.a.agm.3?igshid=NTc4MTIwNjQ2YQ=="
            >
              <i className="bx bxl-instagram mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300"></i>
            </a>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Footer;
