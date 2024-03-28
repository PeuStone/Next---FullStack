import { BaseComponent } from "@src/theme/BaseComponent";
import { stylesheet } from "@src/theme/StyleSheet";

interface ImageProps {
  src: string;
  alt: string
  stylesheet?: stylesheet;
}

export default function Image({ src, alt, ...props }) {
  return (
    <BaseComponent
      as="img"
      src={src}
      alt={alt}
      {...props}
    />
  )
}
