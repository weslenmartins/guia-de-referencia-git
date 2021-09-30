import Button from '../Button'

import * as S from './styled'

type HeroProps = {
  title: string
  description: string
  category: string
}

const Hero = ({ title, description, category }: HeroProps) => {
  return (
    <S.Hero className="container">
      <S.Title className={title.length > 11 && `title--big`}>
        <S.Git>git</S.Git>
        {title}
      </S.Title>
      <S.Info>
        <S.InfoDetails>
          <S.Description>{description}</S.Description>
          <S.Category>
            <strong>Tipo:</strong> {category}
          </S.Category>
        </S.InfoDetails>
        <S.InfoAside>
          <Button
            link={`https://git-scm.com/docs/git-${title}`}
            layout="primary"
            title="Confira a documentação completa"
          >
            Leia a definição completa
          </Button>
        </S.InfoAside>
      </S.Info>
    </S.Hero>
  )
}

export default Hero
