import React from "react";
import styled from "styled-components";
import { stylesheet } from '@src/theme/StyleSheet';
import { parseStyleSheet } from "@displaykit/responsive_styles";

interface StyledBaseComponent {
  stylesheet?: stylesheet;
  ref: any;
}
const StyledBaseComponent = styled.div<StyledBaseComponent>`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  flex-shrink: 0;
  ${({ stylesheet }) => parseStyleSheet(stylesheet)}
`;

interface BaseComponentProps {
  stylesheet: stylesheet;
  [key: string]: any;
};
export const BaseComponent = React.forwardRef<unknown, BaseComponentProps>((props, ref) => {
  return (
    <StyledBaseComponent ref={ref} {...props} />
  )
});

BaseComponent.defaultProps = {
  stylesheet: {},
}
