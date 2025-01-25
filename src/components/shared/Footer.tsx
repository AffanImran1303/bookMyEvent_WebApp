import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t bg-[#002547] text-[#8d99ae]">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
        <p className="p-semibold-20">bookmyevent</p>
        </Link>
        <p>©2025 All Rights Reserved @bookmyevent</p>
      </div>
    </footer>
  )
}

export default Footer