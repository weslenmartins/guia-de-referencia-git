import Link from 'next/link'

import * as S from './styled'

type ButtonProps = {
  title: string
  link: string
  layout: 'primary' | 'outline-white'
  children: string
}

const Button = ({ title, link, layout, children }: ButtonProps) => {
  return (
    <Link href={link}>
      <a title={title}>
        <S.Button className={`layout--${layout}`}>{children}</S.Button>
      </a>
    </Link>
  )
}

export default Button
