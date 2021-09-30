import * as S from './styled'

import siteSetup from '../../utils/setup'

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper className="container">
        <S.FooterText>
          Material de consulta extraido da documentação{' '}
          <a
            href="https://git-scm.com/docs"
            title="Guia de referência do Git"
            rel="noreferrer"
          >
            git-scm
          </a>
          , projeto de estudo. | Projeto desenvolvido com Next.js e ♡
        </S.FooterText>
        <S.FooterNav>
          <li>
            <a
              href={siteSetup.githubRepo}
              title="Acessar o repositório do projeto no Github"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
        </S.FooterNav>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
