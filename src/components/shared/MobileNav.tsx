import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import Image from "next/image"
  import { Separator } from "../ui/separator"
  import NavItems from "./NavItems"
import Link from "next/link"

  const MobileNav=()=>{
    return (
        <nav className="md:hidden">
            <Sheet>
                <SheetTrigger className="align-middle">
                    <Image src="/assets/icons/NavbarMenu.svg" width={24} height={24} alt="menu" className="cursor-pointer"/>
                </SheetTrigger>
                <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
                  <SheetTitle>
                <Link href="/" className="w-36">
      <p className="text-[#1b72eb] p-semibold-20">bookmyevent</p>
      </Link>
      </SheetTitle>
                    <Separator className="border border-gray-50"/>
                    <NavItems/>
                </SheetContent>
            </Sheet>
        </nav>
    )
  }
  export default MobileNav;