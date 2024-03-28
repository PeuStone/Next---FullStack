import Box from "@src/components/Box/Box";
import Image from "@src/components/Image/image";
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
    <Box
      stylesheet={{
        color: 'white'
      }}
    >
      <Image
        src='https://github.com/peustone.png'
        alt='Imagem de perfil do Pedro'
        stylesheet={{
          width: '128px',
          height: '128px',
          borderRadius: '100%'
        }}
      />
      <Icon name="youtube" />
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
