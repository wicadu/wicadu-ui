import React, { useMemo } from 'react'
import styled from '@emotion/styled'
import PropTypes, { InferProps } from 'prop-types'

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
  ])
}

type Props = InferProps<typeof propTypes>

const defaultProps: Props = {
  type: htmlType.default
}

function Typography ({ children, type }: Props) {
  const Component = useMemo(() => {
    if (type === htmlType.title) return Title
    if (type === htmlType['title-2']) return Title2
    if (type === htmlType['title-3']) return Title3
    if (type === htmlType['title-4']) return Title4

    return Default
  }, [type])

  return <Component>{children}</Component>
}

const Title = styled.h1``
const Title2 = styled.h2``
const Title3 = styled.h3``
const Title4 = styled.h4``
const Default = styled.p``

Typography.propTypes = propTypes
Typography.defaultProps = defaultProps

export default Typography
