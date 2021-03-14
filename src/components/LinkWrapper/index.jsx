import PropTypes from 'prop-types'
import Link from 'next/link'
import * as S from './styled'

const LinkWrapper = ({ href, children }) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

LinkWrapper.propTypes = {
  href: PropTypes.string,
  children: PropTypes.any.isRequired
}

export default LinkWrapper
