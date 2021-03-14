import styled from 'styled-components'
import { defaultValue } from 'styles/default'

export const Wrapper = styled.main`
  position: fixed;
  top: ${defaultValue.size.medium};
  right: ${defaultValue.size.medium};
  color: ${defaultValue.colors.black};
  cursor: pointer;
  z-index: 1100;
  svg {
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    color: ${defaultValue.colors.gray};
  }
`
