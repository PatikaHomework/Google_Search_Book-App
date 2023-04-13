import React from 'react'
import { AiOutlineGithub, AiFillLinkedin, AiOutlineLink } from 'react-icons/Ai';
function Header() {
    return (
        <div className='bg-teal-500 p-5 text-white  sticky bottom-0 w-full mt-12' >
            <div className='flex flex-row w-full justify-center items-center space-x-8 '>
                <a href="https://images.pexels.com/photos/12064/pexels-photo-12064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
                    < AiOutlineGithub className='h-6 w-6' />
                </a>
                <a href="https://www.linkedin.com/in/carullahtursun/">
                    < AiFillLinkedin className='h-6 w-6' />
                </a>
                <a href="https://carullahtursun.vercel.app">
                    < AiOutlineLink className='h-6 w-6' />
                </a>
            </div>
        </div>
    )
}

export default Header