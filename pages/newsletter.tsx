import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";

export default function NewsletterScreen() {
  return (
    <Box
      stylesheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        stylesheet={{
          alignItems: 'center',
          width: "100%",
          maxWidth: "500px",
          padding: "16px"
        }}
      >
        <Image
          src='https://www.github.com/peustone.png'
          alt="Foto do PeuStone"
          stylesheet={{
            borderRadius: "100%",
            width: '100px',
            marginBottom: '16px',
          }}
        />
        <Text variant="heading2">
          Newsletter do PeuStone
        </Text>
        <NewsletterTextField
          placeholder="informe o seu email"
        />
        <Button fullWidth stylesheet={{ marginTop: "16px" }}>
          Cadastrar
        </Button>
      </Box>
    </Box>
  )
}

interface NewsletterTextFieldProps {
  placeholder?: string
}

function NewsletterTextField(props: NewsletterTextFieldProps) {
  return (
    <Box
      stylesheet={{
        maxWidth: '400px',
        width: '100%'
      }}
    >
      <BaseComponent
        as='input'
        {...props}
        stylesheet={{
          border: "1px solid rgb(195, 195, 195)",
          borderRadius: "4px",
          padding: "9px",
          width: '100%'
        }}
      />
    </Box>
  )
}
