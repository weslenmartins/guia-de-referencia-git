import Link from 'next/link'
import Button from '../Button'

import * as S from './styled'
import { Git as GitSVG } from '@styled-icons/boxicons-logos/Git'
import siteSetup from '../../utils/setup'

const Header = () => {
  return (
    <S.Header className="container">
      <Link href="/">
        <a title="Acessar a primeira página">
          <S.Logo>
            <span>
              <GitSVG />
            </span>
            <b>{siteSetup.siteTitle}</b>
          </S.Logo>
        </a>
      </Link>
      <S.Nav>
        <Button
          link="/random"
          layout="outline-white"
          title="Conheça um comando aleatório de git"
        >
          Comando aleatório
        </Button>
      </S.Nav>
    </S.Header>
  )
}

export default Header
