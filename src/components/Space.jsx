import React from 'react'

const Space = () => {
  return (
    <section className='text-white py-12 sm:max-w-[640px] mx-auto sm:text-center lg:max-w-[1024px] dark:text-violet-950'>
      <article className='px-6 lg:grid lg:grid-cols-2 lg:gap-2 '>
        <h3 className='font-bold text-3xl sm:text-4xl lg:col-start-2 lg:my-20 lg:text-5xl'><span className='text-violet-500/80 lg:text-5xl dark:text-violet-700'>Last landing </span>and website projects</h3>
        <p className='text-lg font-light mt-6 mb-6 sm:text-xl lg:col-start-2 lg:-my-52 lg:text-3xl'>Cheer up and live my projects, know my work.</p>
        <img className='transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl lg:col-start-1 lg:row-start-1' src="/images/cel1.png" alt="" />
        </article>

        <article className='px-6 py-20 lg:grid lg:grid-cols-2 lg:gap-2'>
        <h3 className='font-bold text-3xl sm:text-4xl lg:col-start-1 lg:row-start-1 lg:my-20 lg:text-5xl'><span className='text-violet-500/80 lg:text-5xl dark:text-violet-700'>Build </span>a whole new world</h3>
        <p className='text-lg font-light mt-6 mb-6 sm:text-xl lg:col-start-1 lg:-my-44 lg:text-3xl'>We are in the era of digitization, it is time to team up and create great things.</p>
        <img className='transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 hover:shadow-xl lg:col-start-2 lg:row-start-1 lg:' src="/images/cel2.png" alt="" />
        </article>
    </section>
  )
}

export default Space