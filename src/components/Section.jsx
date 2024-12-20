import React, { Fragment } from 'react'

export default function Section() {
  return (
    <Fragment>
        <section className='container h-[600px] flex flex-col items-center justify-center font-sans gap-[20px]'>
            <h1 className='text-[50px] font-semibold text-blue-500'>MEN HAQIMDA</h1>
            <p className='text-gray-400 text-[20px] text-center w-[45%] mb-[30px]'>Bu yerda siz men haqimda ko'proq ma'lumot bilib olishingiz mumkin, men qanday ishlar qilaman va qaysi dasturlash tillarini bilaman.</p>
            <div className='flex w-full'>
                <div className='w-[50%] flex ml-[30px]'>
                <p className='text-start w-[75%] text-[17px] leading-7 text-gray-500 font-semibold'>Salom! Men OYBEK, <span className='font-semibold text-red-600'>FRONTEND</span> dasturchiman. HTML, CSS, JavaScript va boshqa frontend texnologiyalarini ishlatib, zamonaviy va foydalanuvchilarga qulay saytlar yaratishga harakat qilaman. Kodni toza va samarali yozishga e'tibor beraman, shuningdek, foydalanuvchi tajribasini yaxshilashni maqsad qilaman.  <br /> <br />Mening ish uslubim — muammolarni hal qilish va ijodiy yechimlarni izlash. React kabi frontend ramkalarini bilaman va veb-saytlarni optimallashtirishda tajribam bor.</p>
                </div>
                <div className='w-[50%]'>
                    <h1 className='text-center text-[23px] font-semibold text-gray-500 mb-[30px]'>DASTURLASH TILLARI</h1>
                    <div className=' gap-[25px] w-[90%]'>
                        <p className='inline mx-[6px] my-[10px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>HTML</p>
                        <p className='inline mx-[6px] my-[10px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>CSS</p>
                        <p className='inline mx-[6px] my-[10px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>JAVASCRIPT</p>
                        <p className='inline mx-[6px] my-[10px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>REACT.JS</p> <br />
                        <br/>
                        <p className='inline m-[6px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>TAILWIND</p>
                        <p className='inline m-[6px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>GIT</p>
                        <p className='inline m-[6px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>BOOTSTRAP</p>
                        <p className='inline m-[6px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>TYPESCRIPT</p>
                        <p className='inline m-[6px] p-[11px] rounded-lg bg-blue-400 text-white font-semibold'>SASS</p>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}


