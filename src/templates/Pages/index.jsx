import PropTypes from 'prop-types'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'

import * as S from './styled'

const PageTemplate = ({ heading, body }) => (
  <S.Container>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Content>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Content>
  </S.Container>
)

PageTemplate.propTypes = {
  heading: PropTypes.string,
  body: PropTypes.string
}

export default PageTemplate
