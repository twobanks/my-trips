import styled from 'styled-components'
import { defaultValue } from 'styles/default'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
  height: 100vh;
  max-width: ${defaultValue.size.container};
`
export const Heading = styled.h1`
  font-size: ${defaultValue.size.large};
  margin-bottom: ${defaultValue.size.large};
`
export const Content = styled.div`
  p {
    font-size: ${defaultValue.size.medium};
    line-height: ${defaultValue.size.medium};
  }
`
