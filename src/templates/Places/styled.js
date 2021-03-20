import styled from 'styled-components'
import { defaultValue } from 'styles/default'

export const Wrapper = styled.div`
  padding: 5rem 3rem;
`

export const Container = styled.section`
  max-width: ${defaultValue.size.container};
  margin: auto;
`

export const Heading = styled.h1`
  font-size: ${defaultValue.size.large};
  margin-bottom: 3rem;
`

export const Body = styled.div`
  margin-bottom: 5rem;
  p {
    margin-bottom: 3rem;
  }
`

export const Gallery = styled.div`
  display: grid;
  grid-gap: 3rem;
  img {
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #edeef1 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;
    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  }
`
