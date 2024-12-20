import React, { Fragment } from 'react'
import dev from '../images/dev-avatar.svg'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <Fragment>
        <nav className='container h-[80px] flex font-sans'>
            <div className='w-[50%] flex items-center pl-[10px] gap-4'>
                <img src={dev} alt=""  className='w-[45px]'/>
                <Link to={"/"}><h1 className='font-roboto font-semibold text-[18px] text-black hover:text-blue-500 cursor-pointer'>OYBEK MIRFAYZULLAYEV</h1></Link>
            </div>
            <div className='w-[50%] flex items-center justify-end'>
                <ul className='flex  items-center gap-[60px]'>
                    <li><Link to={"/"} className='text-black w-auto py-[2px] px-[4px] active:opacity-50 hover:text-blue-600  text-[18px] font-sans font-semibold'>BOSH SAHIFA</Link></li>
                    <li><Link to={"/projects"} className='text-black w-auto py-[2px] px-[4px] active:opacity-50 hover:text-blue-600  text-[18px] font-sans font-semibold'>LOYIHALAR</Link></li>
                    <li><Link to={"/about"} className='text-black w-auto py-[2px] px-[4px] active:opacity-50 hover:text-blue-600  text-[18px] font-sans font-semibold'>HAQIDA</Link></li>
                </ul>
            </div>
        </nav>
    </Fragment>
  )
}
