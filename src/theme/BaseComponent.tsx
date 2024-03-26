import React from 'react'
import styled from 'styled-components'
import { stylesheet } from "@src/theme/StyleSheet";
import { parseStyleSheet } from '@displaykit/responsive_styles';

interface StyledBaseComponent {
  stylesheet?: stylesheet;
}

const StyledBaseComponent = styled.div<StyledBaseComponent>`
  ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`

export const BaseComponent = (props) => {
  return (
    <StyledBaseComponent {...props}/>
  )
}

BaseComponent.defaultProps = {
  stylesheet: {},
}
