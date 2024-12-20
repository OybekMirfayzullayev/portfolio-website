import React, { Fragment } from 'react'
import avatar from '../images/img-ava.jpg'
import Section from '../components/Section.jsx'
import {Link} from 'react-router-dom'

export default function Main() {
  return (
    <Fragment>
        <main className='w-full h-[650px] mt-[6px] font-sans'>
            <div className='container h-full flex items-center justify-center flex-col gap-[33px]'>
                <img src={avatar} alt="dev" className='rounded-[50%] w-[200px]' />
                <h1 className='text-[50px] font-semibold text-center w-[85%] '>Salom! Men OYBEK MIRFAYZULLAYEV</h1>
                <p className='w-[71%] text-center text-[24px] font-medium'>Frontend Dasturchiman. Kod bilan san’at va texnologiyani uyg‘unlashtirib, interaktiv va zamonaviy veb-saytlar yarataman.Mening maqsadim — g‘oyalarni haqiqatga aylantirish!</p>
                <Link to={"/projects"} ><button className='text-[22px] font-semibold px-[50px] py-[10px] rounded-xl bg-blue-500 text-white active:opacity-70'>LOYIHALARIM</button></Link>
            </div>
        </main>
        <Section />
    </Fragment>

  )
}
