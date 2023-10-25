"use client"

import Link from 'next/link'

interface ChildComponentProps {
  className: string
}

const Navbar: React.FC<ChildComponentProps> = ({ className }) => {

  const handleScroll = (ev: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    ev.preventDefault()
    const href = ev.currentTarget.href
    const targetId = href.replace(/.*\#/, "")
    const elem = document.getElementById(targetId)
    elem?.scrollIntoView({
      behavior: "smooth",
    })
  }

  return (
    <nav className={className}>
      <Link href="#summary" onClick={handleScroll}>Summary</Link>
      <Link href="#overview" onClick={handleScroll}>Overview</Link>
      <Link href="#work-history" onClick={handleScroll}>Work</Link>
      <Link href="#education" onClick={handleScroll}>Education</Link>
      <Link href="#accomplishments" onClick={handleScroll}>Accomplishments</Link>
      <Link href="#languages" onClick={handleScroll}>Languages</Link>
      <Link href="#timeline" onClick={handleScroll}>Timeline</Link>
    </nav>
  )
}

export default Navbar
