import Link  from 'next/link';
import React from 'react'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import NavItems from './NavItems';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';

const Header = () => {
  return (
    <header className="w-full border-b">
    <div className="wrapper flex items-center justify-between">
      <Link href="/" className="w-36">
      <p className="text-[#1b72eb] p-semibold-20">bookmyevent</p>
      </Link>
      <SignedIn>
        <nav className="md:flex-between hidden w-full max-w-xs">
          <NavItems/>
        </nav>
      </SignedIn>

      <div className="flex w-32 justify-end gap-3">
        <SignedIn>
          <UserButton afterSwitchSessionUrl="/" />
          <MobileNav/>
        </SignedIn>
        <SignedOut>
          <Button asChild className="rounded-full primary-button" size="lg">
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
        </SignedOut>
      </div>

      </div>
    </header>
  )
}

export default Header