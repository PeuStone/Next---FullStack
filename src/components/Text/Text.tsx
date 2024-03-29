import { BaseComponent } from "@src/theme/BaseComponent";
import { stylesheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";
import React from 'react';

interface TextProps {
  variant?: ThemeTypographyVariants;
  tag?: 'p' | 'li' | 'h1' | 'h2' | 'h2' | string;
  children?: React.ReactNode;
  stylesheet?: stylesheet;
  ref: any;
}
const Text = React.forwardRef(({
  tag,
  stylesheet,
  variant,
  ...props
}: TextProps, ref) => {
  const theme = useTheme();
  const textVariant = theme.typography.variants[variant];

  return (
    <BaseComponent
      as={tag}
      stylesheet={{
        fontFamily: theme.typography.fontFamily,
        ...textVariant,
        ...stylesheet,
      }}
      ref={ref}
      {...props}
    />
  )
})

Text.defaultProps = {
  tag: 'p',
  variant: 'body2'
};

export default Text;
