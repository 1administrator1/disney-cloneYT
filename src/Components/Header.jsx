import React, {useState} from 'react'
import logo from './../assets/images/disney-logo.png'
import {HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv, } from "react-icons/hi2";
import {HiPlus, HiDotsVertical} from "react-icons/hi";
import HeaderItem from './HeaderItem';


function Header() {
    const [toggle, setToggle]=useState(false);
    const menu= [
        {
            name:'HOME',
            icon:HiHome
        },
        {
            name:"SEARCH",
            icon:HiMagnifyingGlass
        },
        {
            name:"WATCH LIST",
            icon:HiPlus
        },
        {
            name:"ORIGINALS",
            icon:HiStar
        },
        {
            name:"MOVIES",
            icon:HiPlayCircle
        },
        {
            name:"SERIES",
            icon:HiTv
        }
    ]

  return (
    <div className='mx-auto p-6'>
        <div  className='flex flex-wrap items-center justify-between mx-auto p-6 py-6 px-12 '>
       
       <div class=" flex items-center space-x-3 rtl:space-x-reverse ">
        <a href="#"><img src={logo} alt="" className='self-center h-8 my-auto mx-auto'/></a>
        
        <div className='hidden md:flex gap-14 flex items-center space-x-1 size-full'>
        {menu.map((item)=>(
            <HeaderItem name={item.name} icon={item.icon}/>
        ))}
        </div>

        <div className='flex md:hidden gap-14 p-8  items-center space-x-1'>
        {menu.map((item, index)=>index<3&&(
            <HeaderItem name={' '} icon={item.icon}/>
        ))}
         <div className=' md:hidden p-6' onClick={()=>setToggle(!toggle)}>
            <HeaderItem name={' '} icon={HiDotsVertical}/>
           {toggle? <div className='absolute mt-0.1 bg-[#121212] border-[1px] border-gray-700 p-3 px-3 py-4 items-center justify-center space-x-3'>
           {menu.map((item, index)=>index>=3&&(
                <HeaderItem name={item.name} icon={item.icon}/>
            ))}
           </div> : null}
        </div>
        </div>
        </div>
        <img src="src\assets\images\Profile.jpg" alt="" className=' hidden md:flex w-[60px] h-[60px] rounded-full flex p-1 justify-center' />
        </div>
    </div>
  )
}

export default Header

//voo