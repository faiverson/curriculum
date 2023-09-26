
'use client'

import React, { ReactNode, useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './accordion.module.css'

type Alignment = 'left' | 'right'

type Type = 'primary' | 'secondary'

interface MyComponentProps {
  alignment: Alignment
  type?: Type
  company: string
  date: string
  position: string
  children?: ReactNode
}

const Alignment = {
  left: 'left',
  right: 'right',
}

const Type = {
  primary: 'primary',
  secondary: 'secondary',
}

const Accordion: React.FC<MyComponentProps> = ({ alignment, type = Type.primary, company, date, position, children }) => {
  const [open, setOpen] = useState(false)

  const onToggle = () => setOpen(!open)

  return (
    <article className={`${styles.accordion} ${styles[alignment]} ${styles[type]}`}>
      <div className="flex flex-col-2 justify-between px-4 pb-4">
        <div className={styles['acc-header']}>
          <div className="flex gap-x-16 items-baseline">
            <h3 className="text-2xl font-bold">{company}</h3>
            <div className="text-base text-boldGrey">{date}</div>
          </div>
          <h4 className="text-lg w-full">{position}</h4>
        </div>
        <button className={open ? styles.up : styles.down} onClick={onToggle}>
          <svg viewBox="0 0 14 8" className="toggle-btn">
            <path d="M11.613 0.288001L6.95404 4.946L2.29404 0.288001C2.20664 0.200672 2.1029 0.131412 1.98874 0.0841747C1.87458 0.0369377 1.75223 0.012649 1.62868 0.0126954C1.50514 0.0127418 1.38281 0.0371223 1.26868 0.0844451C1.15455 0.131768 1.05087 0.201106 0.963538 0.288501C0.876209 0.375896 0.806949 0.479635 0.759712 0.593797C0.712475 0.707958 0.688186 0.830306 0.688232 0.953855C0.688279 1.0774 0.71266 1.19973 0.759982 1.31386C0.807305 1.42798 0.876643 1.53167 0.964038 1.619L6.28904 6.942C6.37634 7.02938 6.48 7.0987 6.59411 7.146C6.70821 7.1933 6.83052 7.21764 6.95404 7.21764C7.07756 7.21764 7.19986 7.1933 7.31397 7.146C7.42807 7.0987 7.53174 7.02938 7.61904 6.942L12.943 1.619C13.0304 1.53167 13.0998 1.42798 13.1471 1.31386C13.1944 1.19973 13.2188 1.0774 13.2188 0.953855C13.2189 0.830306 13.1946 0.707958 13.1474 0.593797C13.1001 0.479635 13.0309 0.375896 12.9435 0.288501C12.8562 0.201106 12.7525 0.131768 12.6384 0.0844451C12.5243 0.0371223 12.4019 0.0127418 12.2784 0.0126954C12.1548 0.012649 12.0325 0.0369377 11.9183 0.0841747C11.8042 0.131412 11.7004 0.200672 11.613 0.288001Z" fill="#2D70F6" />
          </svg>
        </button>
      </div>
      {!!children  && <div className={styles.description}>
        <div className="text-boldGrey ">Job overview</div>
        <div className="mt-4 p-4">
          {children}
        </div>
      </div>}
    </article>
  )
}

export default Accordion
