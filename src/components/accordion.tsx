'use client'

import React, { ReactNode, useRef, useState, useEffect } from 'react'
import Tag, { TagColor } from 'components/tag'
import styles from './accordion.module.css'

type Alignment = 'left' | 'right'

type Type = 'primary' | 'secondary'

interface MyComponentProps {
  alignment: Alignment
  type?: Type
  company: string
  date: string
  position: string
  industry?: string[]
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


const Accordion: React.FC<MyComponentProps> = ({ alignment, type = Type.primary, company, date, position, industry, children }) => {
  const collapseRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)

  const onToggle = () => setOpen(!open)

  useEffect(() => {
    if (!!collapseRef.current && open) {
      setHeight(collapseRef.current.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [open])

  const cursor = () => {
    if (!children) {
      return 'cursor-auto';
    }
    return (open ? 'cursor-n-resize' : 'cursor-s-resize')
  }

  return (
    <article className={`${styles.accordion} ${styles[alignment]} ${styles[type]}`}>
      <div className={`flex flex-col-2 justify-between px-3 py-2 lg:px-4 ${cursor()}`} onClick={onToggle}>
        <div className={styles['acc-header']}>
          <div className="flex flex-col items-baseline gap-y-2 lg:flex-row lg:gap-x-16">
            <h3 className="text-xl lg:text-2xl font-bold whitespace-nowrap">{company}</h3>
            <div className="text-sm lg:text-base dark:text-bold-grey text-stone-500 whitespace-nowrap">{date}</div>
          </div>
          <h4 className="text-base lg:text-lg">{position}</h4>
        </div>
      </div>
      {!!children &&
        <div className={styles.content} ref={collapseRef} style={{ height }}>
          <div className={styles.description}>
            <div className="dark:text-bold-grey text-black flex items-center justify-between gap-y-2 lg:flex-row pb-2">
              <div>Job overview</div>
              <div className={styles.tags}>
                {industry?.map((item, idx) => <Tag key={`${company}-${idx}`} text={item} color={Object.values(TagColor)[idx] as keyof typeof TagColor} />)}
              </div>
            </div>
            <div className="lg:mt-4">{children} </div>
          </div>
        </div>
      }
    </article>
  )
}

export default Accordion
