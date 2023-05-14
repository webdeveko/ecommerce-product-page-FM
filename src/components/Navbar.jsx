import React, {useState} from 'react'

import { logo, menu, close, avatar, cart } from '../assets'

const Navbar = () => {
    const Links = ['Collections', 'Men', 'Women', 'About', 'Contact' ];
    const [toggle, setToggle] = useState(false)

  return (
    <section className='w-full flex justify-between items-center max-w-6xl mx-auto h-[40px] sm:h-[90px]'>
        
        {/* mobile menu */}
        <div className='sm:hidden flex justify-start items-center mx-4'>
            <img src={toggle ? close : menu} 
            className='object-contain cursor-pointer mx-4 z-40' 
            onClick={() => setToggle(!toggle)}/>
            <div className={`${!toggle ? 'hidden' :'flex'} w-[250px] bg-white absolute left-0 top-0 h-full z-30`}>
                <div className='mt-[40px]'>
                    <ul className='list-none flex justify-start items start flex-col gap-5 mx-4 font-bold'>
                        {Links.map((link) => (
                            <li>{link}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className={`sm:hidden ${!toggle ? 'hidden' : 'flex '} absolute top-0 right-0 w-full h-full bg-black/50 z-10`} />
        </div>
        

        {/* logo */}
        <img src={logo} className={`${!toggle ? '' : '-ml-[120px]'} mx-4`} />
        
            {/* desktop menu */}
            <ul className='list-none hidden sm:flex flex-row gap-10'>
                {Links.map((link) => (
                    <li className='cursor-pointer text-grayFont hover:text-very-dark-blue' >
                        {link}
                    </li>
                ))}
            </ul>

            {/* cart and user image */}
            <div className='flex gap-x-5 items-center mx-4'>
                <img className='cursor-pointer h-[20px] w-[22px]' src={cart} alt="" />
                <div className='rounded-full border hover:border-orangeish'>
                    <img className='cursor-pointer h-[24px] w-[24px] sm:h-[50px] sm:w-[50px]' src={avatar} />
                </div>
            </div>
        
    </section>
  )
}

export default Navbar