
'use client'

import styles from './tag.module.css'

type TagColor = 'blue' | 'yellow' | 'red' | 'green' | 'grey'

interface MyComponentProps {
  text: string,
  color: keyof typeof TagColor
}

export const TagColor = {
  blue: 'blue',
  green: 'green',
  yellow: 'yellow',
  red: 'red',
  grey: 'grey',
}

const Tag: React.FC<MyComponentProps> = ({ text, color }) => {
  return (
    <div className={`${styles.tag} ${styles[color]}`}><span>{text}</span></div>
  )

}
export default Tag
