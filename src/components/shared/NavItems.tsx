'use client';

import React from 'react';
import Link from 'next/link';
import {headerLinks} from '@/constants';
import {usePathname} from "next/navigation";

const NavItems=()=>{
    const pathName=usePathname();

    return(
        <ul className="text-[#002547] md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathName === link.route;
          
          return (
            <li
              key={link.route}
              className={`${
                isActive && 'text-[#1b72eb]'
              } flex-center p-medium-16 whitespace-nowrap transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:text-[#1b72eb]`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
    )
}
export default NavItems;