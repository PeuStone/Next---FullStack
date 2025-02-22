import { Breakpoints } from '@displaykit/responsive_styles'

// Generics
type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface stylesheet {
  fontFamily?: ResponsiveProperty<string> | string;
  backgroundColor?: ResponsiveProperty<string> | string;
  [key: string]: any;
}
