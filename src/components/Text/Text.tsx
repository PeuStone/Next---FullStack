import React from "react";
import Box from "../Box/Box";
import theme from "@src/theme/theme";

interface TextProps {
  children: React.ReactNode;
  tag: 'p' | 'li' | 'h1' | string;
}

export default function Text(props: TextProps) {
  return (
    <Box
      stylesheet={{
        fontFamily: theme.typography.fontFamily
      }}
      {...props}
    />
  )
}

Text.defaultProps = {
  tag: 'p',
}
