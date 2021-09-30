import styled from 'styled-components'

export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: calc(100vh - 80px);
  padding-bottom: 150px;
`

export const Git = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  color: var(--color-content-soft);
  font-size: 1.225rem;
  font-weight: var(--font-weight-extra-light);
  line-height: 1;
  transform: translateY(calc(-120%));

  @media (min-width: 992px) {
    transform: translateY(calc(-65%));
    font-size: 5.625rem;
  }
`

export const Title = styled.h1`
  position: relative;
  margin-bottom: 15px;
  font-size: 2.188rem;
  font-weight: var(--font-weight-semi-bold);
  line-height: 1.15;

  @media (min-width: 992px) {
    margin-bottom: 0;
    font-size: 7.5rem;
  }

  @media (min-width: 1200px) {
    font-size: 10rem;
  }

  @media (min-width: 1900px) {
    font-size: 13rem;

    &.title--big {
      font-size: 10rem;
    }
  }
`

export const Description = styled.p`
  margin-bottom: 15px;
  color: var(--color-content-soft);
  font-size: 1rem;
  line-height: 1.2;

  @media (min-width: 992px) {
    font-size: 2.188rem;
  }
`

export const Category = styled.h3`
  color: var(--color-content-soft);
  font-size: 0.813rem;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 992px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`

export const InfoDetails = styled.div`
  flex: 0 0 55%;
`

export const InfoAside = styled.div`
  padding-top: 25px;

  @media (min-width: 992px) {
    padding-top: 0;
  }
`
