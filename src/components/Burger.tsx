"use client"

import { useRef, useState, useEffect } from 'react'
import Navbar from 'components/Navbar'
import FocusLock from 'react-focus-lock'
import styles from './burger.module.css'

const useOnClickOutside = <T extends HTMLDivElement>(ref: React.RefObject<T>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    };

    document.addEventListener('mousedown', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
    }
  }, [ref, handler])
}


export default function Burger() {
  const node = useRef<HTMLDivElement | null>(null)
  const [open, setOpen] = useState(false)

  const toggleBurger = () => setOpen(!open)

  useOnClickOutside(node, () => setOpen(false))

  return (
    <>
      <button className='pl-2 w-full dark:text-white text-bg-bold-black md:hidden' onClick={toggleBurger} aria-label="Toggle Navbar">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div ref={node}>
        <FocusLock disabled={!open}>
          <div className={styles.navbar} style={{ transform: (open ? 'translateX(0)' : 'translateX(-100%)') }}>
            <button className='absolute top-2 right-2' onClick={toggleBurger} aria-label="Toggle Navbar">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <Navbar className='uppercase flex flex-col gap-6 pl-8 pr-16 pt-8' />
          </div>
        </FocusLock>
      </div>
    </>
  )
}
