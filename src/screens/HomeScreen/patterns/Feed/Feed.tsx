import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/icon/icon";
import { useTemplateConfig } from "@src/services/template/TemplateConfigContext";
import { useTheme } from "@src/theme/ThemeProvider";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  const theme = useTheme();
  return (
    <Box
      stylesheet={{
        width: '100%',
        backgroundColor: theme.colors.neutral.x000,
        marginTop: '-228px',
        maxWidth: '683px',
        borderRadius: '8px',
        paddingVertical: '40px',
        paddingHorizontal: '32px'
      }}
    >
      {children}
    </Box>
  )
}

Feed.Header = () => {
  const theme = useTheme();
  const templateConfig = useTemplateConfig();

  return (
    <Box
      stylesheet={{
        borderBottom: `1px solid ${theme.colors.neutral.x200}`,
        marginBottom: '24px',
        paddingBottom: '24px'
      }}
    >
      <Box
        stylesheet={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '16px',
          marginBottom: '16px'
        }}
      >
        <Image
          src={templateConfig?.personal?.avatar}
          alt='Imagem de perfil do Pedro'
          stylesheet={{
            width: { xs: '100px', md: '128px' },
            height: { xs: '100px', md: '128px' },
            borderRadius: '100%'
          }}
        />
        <Box
          stylesheet={{
            justifyContent: 'space-between'
          }}
        >
          <Box stylesheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'none', md: 'flex' } }}>
            <Button fullWidth colorVariant="primary" size="xl" href="/"> Newsletter </Button>
            <Button fullWidth colorVariant="neutral" size="xl" href="/"> Buy me a coffee </Button>
          </Box>
          <Box stylesheet={{ flex: 1, justifyContent: 'space-between', display: { xs: 'flex', md: 'none' } }}>
            <Button fullWidth colorVariant="primary" size="xs" href="/"> Newsletter </Button>
            <Button fullWidth colorVariant="neutral" size="xs" href="/"> Buy me a coffee </Button>
          </Box>
        </Box>
      </Box>
      <Text tag="h1" variant="heading4">
        {templateConfig?.personal?.name}
      </Text>
      <Box
        stylesheet={{
          flexDirection: 'row',
          gap: '4px'
        }}
      >
        {/* <Link
          target="_blank"
          href={templateConfig.personal.socialNetworks.github}
        >
          <Icon name="github" />
        </Link> */}
        {Object.keys(templateConfig.personal.socialNetworks).map(key => {
          const socialNetwork = templateConfig.personal.socialNetworks[key];
          if (socialNetwork) {
            return (
              <Link
                key={key}
                target="_blank"
                href={templateConfig.personal.socialNetworks[key]}
              >
                <Icon name={key as any} />
              </Link>
            )
          }
          return null
        })}
      </Box>

      {/* <Link href="https://youtube.com">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" /> */}
    </Box>
  )
}

Feed.Posts = () => {
  return (
    <Box>
      <Text>
        Feed Posts
      </Text>
    </Box>
  )
}
