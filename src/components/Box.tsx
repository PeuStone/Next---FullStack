import { BaseComponent } from "@src/theme/BaseComponent";
import { stylesheet } from "@src/theme/StyleSheet";

interface BoxProps {
  // any será resolvido posteriormente
  tag: any;
  children: React.ReactNode;
  stylesheet: stylesheet
}

export default function Box({ stylesheet, children, tag, ...props }: BoxProps) {
  const Tag = tag || 'div'
  return (
    <BaseComponent as={Tag} stylesheet={stylesheet} {...props}>
      {children}
    </BaseComponent>
  )
}
