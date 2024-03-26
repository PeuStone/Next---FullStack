interface StyleSheet {
  fontFamily: string
}

interface BoxProps {
  // any será resolvido posteriormente
  tag: any;
  children: React.ReactNode;
  styleSheet: StyleSheet
}

export default function Box({ styleSheet, children, tag }: BoxProps) {
  const Tag = tag || 'div'
  return (
    <Tag style={styleSheet}>
      {children}
    </Tag>
  )
}
