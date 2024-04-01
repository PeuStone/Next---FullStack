import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/icon/icon";
import React from "react";

interface FeedProps {
  children: React.ReactNode;
}

export default function Feed({ children }: FeedProps) {
  return (
    <Box>
      <Text>
        Feed Base
      </Text>
      {children}
    </Box>
  )
}

Feed.Header = () => {
  return (
    <Box>
      <Button>
        Olá pessoas!
      </Button>
      <Button.Base href="https://github.com/peustone">
        <Image
          src='https://github.com/peustone.png'
          alt='Imagem de perfil do Pedro'
          stylesheet={{
            width: '128px',
            height: '128px',
            borderRadius: '100%'
          }}
        />
      </Button.Base>
      <Link href="https://youtube.com">
        <Icon name="youtube" />
      </Link>
      <Icon name="twitter" />
      <Icon name="instagram" />
      <Icon name="github" />
      <Text>
        Feed Header
      </Text>
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
