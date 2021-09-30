import Link from 'next/link'

import * as S from './styled'
import { ArrowRightShort as ArrowRightShortSVG } from '@styled-icons/bootstrap/ArrowRightShort'

type ItemProps = {
  title: string
}

const Item = ({ title }: ItemProps) => {
  return (
    <S.Item>
      <Link href={`/git/${title}`}>
        <a title={`Detalhes de git ${title}`}>
          {title}
          <b>
            <ArrowRightShortSVG />
          </b>
        </a>
      </Link>
    </S.Item>
  )
}

export default Item
