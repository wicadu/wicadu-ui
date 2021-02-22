import React, { useMemo } from 'react'
import PropTypes, { InferProps } from 'prop-types'

import styled from '@emotion/styled'
import { css } from '@emotion/react'

import Colors from '../constants/colors'

enum htmlType {
  default = 'default',
  title = 'title',
  'title-2' = 'title-2',
  'title-3' = 'title-3',
  'title-4' = 'title-4',
}

const propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf([
    htmlType.default,
    htmlType.title,
    htmlType['title-2'],
    htmlType['title-3'],
    htmlType['title-4'],
  ]),
  align: PropTypes.oneOf(['left', 'center', 'right']),
  weight: PropTypes.oneOf([100, 300, 400, 600, 700])
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  type: htmlType.default,
  weight: 400,
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

  return <Component {...props}>{children}</Component>
}

const defaultStyles = css`
  color: ${Colors.black};
  line-height: 1.60rem;
  margin: 0px;
  padding: 0px;
`

const Title = styled.h1`
  ${defaultStyles}
  font-size: 26px;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
`
const Title2 = styled.h2`
  ${defaultStyles}
  font-size: 24px;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};

`
const Title3 = styled.h3`
  ${defaultStyles}
  font-size: 22px;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};

`
const Title4 = styled.h4`
  ${defaultStyles}
  font-size: 20px;
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
`
const Default = styled.p`
  ${defaultStyles}
  text-align: ${({ align }) => align};
  font-weight: ${({ weight }) => weight};
`

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export default Typography
