import React from 'react';
import NextLink from 'next/link';
import Text from "../Text/Text";
import { stylesheet } from "@src/theme/StyleSheet";
import { ThemeTypographyVariants } from "@src/theme/theme";
import { useTheme } from "@src/theme/ThemeProvider";


interface LinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
  stylesheet?: stylesheet;
  variant?: ThemeTypographyVariants;
  colorVariant?: 'primary' | 'accent' | 'neutral' | 'success' | 'warning' | 'negative';
  colorVariantEnabled?: boolean;
}

const Link = React.forwardRef(({
  href,
  children,
  colorVariant,
  stylesheet,
  colorVariantEnabled,
  ...props
}: LinkProps, ref) => {
  const theme = useTheme();
  const isIExternalLink = href.startsWith('http');

  const currentColorSet = {
    color: theme.colors[colorVariant].x500,
    hover: {
      color: theme.colors[colorVariant].x400,
    },
    focus: {
      color: theme.colors[colorVariant].x600,
    }
  };

  const linkProps = {
    tag: 'a',
    ref,
    children,
    href,
    stylesheet: {
      textDecoration: 'none',
      ...colorVariantEnabled && {
        color: currentColorSet.color,
      },
      ...stylesheet,
      hover: {
        ...stylesheet?.hover,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
      focus: {
        ...stylesheet?.focus,
        ...colorVariantEnabled && {
          color: currentColorSet.focus.color,
        }
      },
    },
    ...props
  }

  if (isIExternalLink) return (
    <Text
      {...{
        target: '_blank',
        ...linkProps,
      }}
    />
  )

  return (
    <NextLink href={href} passHref>
      <Text {...linkProps} />
    </NextLink>
  )
});

Link.defaultProps = {
  colorVariant: 'primary',
  colorVariantEnabled: true,
};

export default Link;
