import styled from 'styled-components'

export const Footer = styled.footer`
  margin-top: 50px;
  padding: 40px 0;
  border-top: 1px solid var(--border-color);
  font-size: 0.75rem;

  @media (min-width: 992px) {
    margin-top: 100px;
  }

  a {
    text-decoration: underline;
  }
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

export const FooterText = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`

export const FooterNav = styled.ul`
  display: flex;
  justify-content: space-between;

  @media (min-width: 992px) {
    justify-content: flex-end;

    > li + li {
      margin-left: 20px;
    }
  }
`
