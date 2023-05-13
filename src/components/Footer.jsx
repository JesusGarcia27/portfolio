import React from "react";

const Footer = () => {
  return (
    <section className=" shadow-xl shadow-violet-500/50 rounded-lg">
      <article className="bg-gray-900/60 mt-20 text-center h-[150px] ">
        <section className="relative sm:max-w-[640px] mx-auto lg:max-w-[1024px]">
          <div className="mx-4 absolute top-10">
            <img className="w-[80px] h-[80px]" src="/images/1.png" alt="" />
          </div>
        </section>

        <section className="text-white flex justify-end px-4 gap-6 text-2xl sm:max-w-[640px] mx-auto lg:max-w-[1024px]">
          <div>
          <i className='bx bxl-linkedin mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer'></i>
          </div>
          <div>
          <i className='bx bxl-github mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer'></i>
          </div>
          <div>
          <i className='bx bxl-twitter mt-16 hover:shadow-md hover:shadow-violet-500 p-2 cursor-pointer'></i>
          </div>
        </section>
      </article>
    </section>
  );
};

export default Footer;
