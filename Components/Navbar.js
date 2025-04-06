"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import Darkmode from './Darkmode'

const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <nav className="flex bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">WeChat</div>
        <div className="space-x-4 flex items-center">
          <Link href="/" className="text-gray-300 hover:text-white">Home</Link>
          <Link href="/forums" className="text-gray-300 hover:text-white">Forums</Link>
          <Link href="/chat" className="text-gray-300 hover:text-white">UserChat</Link>
          {isMounted && <div className="ml-4 pt-1"><Darkmode /></div>}
          <div className="ml-4">
            <UserButton />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar