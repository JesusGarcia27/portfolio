import React from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";

const Contac = () => {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_ACCOUNTSERVICE,
        import.meta.env.VITE_APP_SERVICETEMPLATE,
        e.target,
        import.meta.env.VITE_APP_KEYACCOUNT
      )
      .then((res) => console.log(res.text))
      .catch((err) => console.log(err));

      resetForm();
  };

  const resetForm = () => {
    document.getElementById("contacForm").reset();
  };

  return (
    <section className="text-white px-4 py-4 sm:max-w-[640px] mx-auto lg:max-w-[1024px] ">
      <article className="bg-gray-900/60 rounded-xl px-4 py-36 text-center shadow-xl shadow-violet-500/50 dark:bg-gray-600">
        <h2 className="text-4xl text-center sm:text-6xl mb-4">
          <span className="text-violet-500/80 dark:text-violet-900">
            Contact
          </span>{" "}
          me!
        </h2>
        <article className="">
          <form id="contacForm" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <label className="px-2" htmlFor="">
                Name:{" "}
              </label>
              <input
                className="rounded-lg mb-2 outline-none bg-violet-500/50 px-2 py-1"
                id="name"
                type="text"
                name="from_name"
              />
            </div>
            <div className="flex justify-center">
              <label className="px-2" htmlFor="">
                Email:{" "}
              </label>
              <input
                className="rounded-lg mb-2 outline-none bg-violet-500/50 px-2 py-1"
                id="email"
                type="text"
                name="email"
              />
            </div>
            <div className="flex justify-center">
              <label className="px-2" htmlFor="">
                Message:{" "}
              </label>
              <input
                className="rounded-lg mb-2 outline-none bg-violet-500/50 px-1 py-1"
                id="message"
                type="text"
                name="message"
              />
            </div>
        <button className="border-[1px] border-white rounded-lg px-3 mt-10 py-2 hover:bg-violet-400/50 transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl hover:shadow-violet-500/50 sm:text-2xl  " onClick={resetForm}>
          {" "}
          Click here{" "}
        </button>
          </form>
        </article>
      </article>
    </section>
  );
};

export default Contac;
