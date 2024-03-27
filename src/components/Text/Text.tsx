import React from "react";
import theme from "@src/theme/theme";
import { stylesheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";

interface TextProps {
  variant?: 'display1'
  children: React.ReactNode;
  tag: 'p' | 'li' | 'h1' | string;
  stylesheet: stylesheet;
}

export default function Text({ stylesheet, variant, ...props }: TextProps) {
  const textVariant = theme.typography.variants[variant]

  return (
    <BaseComponent
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...stylesheet
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
}
