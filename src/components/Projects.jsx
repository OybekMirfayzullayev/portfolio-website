import React, { Fragment } from 'react'

export default function Projects() {
  return (
    <Fragment>
        <section className='projects container'>
            <h1 className='mt-[15px] font-sans text-[35px] font-semibold text-center text-blue-500 mb-4'>LOYIHLARIM</h1>
            <p className='text-center text-[20px] font-roboto font-medium'>Bu erda siz har bir loyihada o'z misolini o'z ichiga olgan men yaratgan shaxsiy va mijozlar loyihalarini topasiz</p>
            <div className='h-[650px] grid grid-cols-3 justify-items-center items-center'> 
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
                <a href="https://oybeks-e-commerce.netlify.app/" target='blank'><button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
                <a href="https://ringoukraine.netlify.app/" target='blank'><button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
                <a href="https://foodnetworkproject.netlify.app/" target='blank'><button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
               <a href="https://awesomeuiexam.netlify.app/" target='blank'> <button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
                <a href="https://moodystudio.netlify.app/" target='blank'><button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
            <div className='website w-[400px] h-[250px] rounded-xl flex items-center justify-center'>
                <a href="https://decbaseproject.netlify.app/" target='blank'><button className='text-white  px-[35px] py-[5px] rounded-3xl bg-blue-600 font-roboto z-30 hidden'>KIRISH</button></a>
            </div>
        </div>
        </section>
        
    </Fragment>
  )
}
