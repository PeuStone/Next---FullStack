import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Image from "@src/components/Image/image";
import Text from "@src/components/Text/Text";
import { BaseComponent } from "@src/theme/BaseComponent";
import { useState } from "react";

function useForm({ initialValues }) {
  const [values, setValues] = useState(initialValues);

  return {
    values,
    handleChange(event) {
      const { name, value } = event.target
      setValues({
        ...values,
        [name]: value
      })
    }
  };
}

export default function NewsletterScreen() {
  const form = useForm({
    initialValues: {
      emailNewsletter: ""
    }
  });

  return (
    <Box
      stylesheet={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <form
        onSubmit={(evento) => {
          evento.preventDefault();
          console.log('estamos enviando os dados do formulario');

          // Validar
          if (!form.values.emailNewsletter.includes("@")) {
            alert("Você precisa informar um email valido!")
            return;
          }
          alert("Você foi cadastrado com sucesso! Cheque seu email para garantir")
          // Enviar para o servidor o email da pessoa
          fetch("/api/newsletter/optin", {
            method: "POST",
            headers: {
              "Content-type": "application/json", // MIME type
            },
            body: JSON.stringify(form.values),
          })
            .then(async (respostaServer) => {
              console.log( await respostaServer.json());
            })
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
            name="emailNewsletter"
            value={form.values.emailNewsletter}
            onChange={form.handleChange}
          />
          <Button fullWidth stylesheet={{ marginTop: "16px" }}>
            Cadastrar
          </Button>
        </Box>
      </form>
    </Box>
  )
}

interface NewsletterTextFieldProps {
  placeholder?: string;
  value?: string;
  name: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
