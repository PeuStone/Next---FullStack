import React from "react";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { stylesheet } from "@src/theme/StyleSheet";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useTheme } from '@src/theme/ThemeProvider'

interface TextProps {
  variant?: ThemeTypographyVariants;
  children: React.ReactNode;
  tag: 'p' | 'li' | 'h1'| 'h2';
  stylesheet?: stylesheet;
}

export default function Text({ stylesheet, variant, ...props }: TextProps) {
  const theme = useTheme();
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
