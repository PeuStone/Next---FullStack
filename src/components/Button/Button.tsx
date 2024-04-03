import React from "react";
import ButtonBase, { ButtonBaseProps } from "./ButtonBase";
import { ColorVariant, Variant, colorVariantBy } from "./colorVariantBy";
import { useTheme } from "@src/theme/ThemeProvider";
import { ButtonSize, buttonSize } from "./buttonSize";

interface ButtonProps extends ButtonBaseProps {
  children: React.ReactNode;
  fullWidth?: boolean;
  colorVariant?: ColorVariant;
  variant?: Variant;
  size?: ButtonSize;
}


export default function Button({ children, stylesheet, fullWidth, colorVariant, variant, size }: ButtonProps) {
  const theme = useTheme();
  return (
    <ButtonBase
      stylesheet={{
        alignSelf: 'flex-start',
        alignItems: 'center',
        justifyContent: 'center',
        // [Color + Variant]
        ...colorVariantBy(theme, colorVariant, variant),
        // [Size]
        ...buttonSize[size],
        // [FullWidth]
        ...(fullWidth && {
          alignSelf: 'initial',
        }),
        ...stylesheet,
      }}
    >
      {children}
    </ButtonBase>
  )
};

Button.defaultProps = {
  fullWidth: false,
  variant: 'contained',
  colorVariant: 'primary',
  size: 'md'
}

Button.Base = ButtonBase;
