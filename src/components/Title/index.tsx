import * as S from './styled'

type TitleProps = {
  layout: 'section'
  children: string
}

const Title = ({ layout, children }: TitleProps) => {
  return <S.Title className={`layout--${layout}`}>{children}</S.Title>
}

export default Title
