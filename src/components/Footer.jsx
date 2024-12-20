import React, { Fragment } from 'react'

export default function Footer() {
  return (
    <Fragment>
        <footer className='w-full h-[200px] bg-black font-roboto opacity-90'>
            <div className='h-full container border-[1px] border-black flex'>
                <div className='w-[50%] flex flex-col gap-[20px] text-white items-start justify-center pl-[30px]'>
                    <h1 className='text-[24px] font-semibold'>OYBEK MIRFAYZULLAYEV</h1>
                    <p className='w-[85%] font-medium'>Umumiy mahsulot muvaffaqiyatiga olib keladigan veb-saytlar va veb-ilovalarning Frontendini yaratadigan Frontendga yo'naltirilgan veb-ishlab chiquvchi.</p></div>
                <div className='w-[50%] flex gap-[25px] justify-end items-center pr-[100px]'>
                    <a href="https://github.com/OybekMirfayzullayev"><i class=" text-white fa-brands fa-github text-[35px] hover:text-orange-400"></i></a>
                    <a href="https://t.me/oybek_me"><i class=" text-white fa-brands fa-telegram text-[35px] hover:text-blue-500"></i></a>
                    <a href="https://www.instagram.com/oybek_mirfayzullayev/"><i class=" text-white fa-brands fa-instagram text-[35px]"></i></a>
                    <a href="https://x.com/omirfayzullayev"><i class=" text-white fa-brands fa-twitter text-[35px] hover:text-blue-500"></i></a>
                </div>
            </div>
        </footer>
    </Fragment>
  )
}
