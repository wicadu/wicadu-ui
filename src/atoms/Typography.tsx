import React, { useMemo } from 'react'
import PropTypes, { InferProps } from 'prop-types'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

enum htmlType {
  default = 'default',
  title = 'title',
  'title-2' = 'title-2',
  'title-3' = 'title-3',
  'title-4' = 'title-4',
  description = 'description'
}

const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    htmlType.default,
    htmlType.title,
    htmlType['title-2'],
    htmlType['title-3'],
    htmlType['title-4'],
    htmlType.description
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf([100, 300, 400, 600, 700]),
  size: PropTypes.number,
  inverse: PropTypes.bool
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  type: htmlType.default,
  align: 'left'
}

function Typography ({ children, type, ...props }: Props) {
  const Component = useMemo(() => {
    if (type === htmlType.title) return Title
    if (type === htmlType['title-2']) return Title2
    if (type === htmlType['title-3']) return Title3
    if (type === htmlType['title-4']) return Title4

    return Default
  }, [type])

  return <Component type={type} {...props}>{children}</Component>
}

const defaultStyles = css`
  margin-bottom: 10px;
`

const Title = styled.h1`
  ${defaultStyles}
  color: ${({ theme, inverse }) => inverse ? theme.colors.white : theme.colors.black};
  font-size: ${({ size }) => size || 2}em;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight || 700};
`
const Title2 = styled.h2`
  ${defaultStyles}
  color: ${({ theme, inverse }) => inverse ? theme.colors.white : theme.colors.black};
  font-size: ${({ size }) => size || 1.8}em;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight || 700};
`
const Title3 = styled.h3`
  ${defaultStyles}
  color: ${({ theme, inverse }) => inverse ? theme.colors.white : theme.colors.black};
  font-size: ${({ size }) => size || 1.5}em;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight || 700};

`
const Title4 = styled.h4`
  ${defaultStyles}
  color: ${({ theme, inverse }) => inverse ? theme.colors.white : theme.colors.black};
  font-size: ${({ size }) => size || 1.2}em;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight || 700};
`
const Default = styled.p`
  ${defaultStyles}
  line-height: 1.30rem;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size || 1}em;

  ${({ type, theme, inverse }) => {
    const { colors } = theme || {}

    if (type === 'description') {
      return `color: ${inverse ? colors.darkGray : colors.lightGray};`
    }

    return `color: ${inverse ? colors.white : colors.black};`
  }}
`

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export default Typography
