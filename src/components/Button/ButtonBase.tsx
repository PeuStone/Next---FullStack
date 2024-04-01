import { ThemeTypographyVariants } from "@src/theme/theme"
import styled from "styled-components";
import Text from "../Text/Text";
import React from "react";
import { useRipple } from "react-use-ripple";
import { stylesheet } from "@src/theme/StyleSheet";
import { useRouter } from "next/router";

const StyledButton = styled(Text) <any>`
  
`

interface ButtonBase {
  href?: string;
  children: React.ReactNode;
  textVariant?: ThemeTypographyVariants;
  stylesheet?: stylesheet;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function ButtonBase({ textVariant, href, children, stylesheet, ...props }) {
  const router = useRouter();
  const ref = React.useRef();
  useRipple(ref, {
    animationLength: 600,
    rippleColor: 'rgba(255,255,255,0.7)'
  })

  const isLink = Boolean(href)
  const Tag = isLink ? 'a' : 'button';

  return (
    <StyledButton
      ref={ref}
      tag={Tag}
      href={href}
      stylesheet={{
        border: '0',
        backgroundColor: 'transparent',
        color: 'inherit',
        outline: '0',
        cursor: 'pointer',
        textDecoration: 'none',
        ...stylesheet
      }}
      onClick={(event) => {
        isLink && event.preventDefault();
        isLink && router.push(href);
        !isLink && props.onClick && props.onClick(event)
      }}
      {...props}
    >
      {children}
    </StyledButton >
  )
}
