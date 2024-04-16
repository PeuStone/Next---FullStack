import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";
import sendGridMail from '@sendgrid/mail';

// Supabase Setup
// ==============
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const dbClient = createClient(SUPABASE_URL, SUPABASE_KEY)
//===============

const httpStatus = {
  Success: 200,
  BadRequest: 400,
  NotFound: 404,
  InternalServerError: 500
}

const controllerByMethod = {
  async POST(req: NextApiRequest, res: NextApiResponse) { // Cria coisas
    const email = req.body.emailNewsletter;

    // Fail Fast Validation
    if (!Boolean(email) || !email.includes("@")) {
      res
        .status(httpStatus.BadRequest)
        .json({ message: "Você precisa enviar um email válido ex: teste@teste.com" })
      return;
    }

    // Sanitize do email
    // - Remover potenciais códigos maliciosos

    // Adiciona a pessoa na newsletter
    await dbClient.from("newsletter_users")
      .insert({ email: email, optin: true });

    // Cria usuários de fato no sistema
    await dbClient.auth.admin.createUser({ email: email })

    try {
      sendGridMail.setApiKey(process.env.SENDGRID_KEY)
      await sendGridMail.send({
        to: "emailcontato@teste.com", // email
        from: "seuemail@teste.com",
        subject: "Titulo do email",
        html: 'Aqui vai o <strong>Conteúdo!!!</strong>'
      })

      res
        .status(httpStatus.Success)
        .json({ message: "Post request!" });

    } catch (error) {
      res
        .status(httpStatus.InternalServerError)
        .json({ message: "Falhamos em enviar seu email" })
      return;
    }

  },
  async GET(req: NextApiRequest, res: NextApiResponse) { // Retorna coisas
    const { data, error } = await dbClient.from("newsletter_users")
      .select("*")
    console.log(data);
    console.log(error);

    res
      .status(httpStatus.Success)
      .json({ message: "Get request!", total: data.length })
  }
}

export default function handler(request: NextApiRequest, response: NextApiResponse) {
  const controller = controllerByMethod[request.method];
  if (!controller) {
    response
      .status(httpStatus.NotFound)
      .json({ message: "Nada encontrado aqui :(" });
    return;
  }
  controller(request, response)
}
// Servidor
// Request e Response
// const responseBody = { name: 'Peu' }
// response
//   .status(httpStatus.Success)
//   .json(responseBody) // Vira texto puro pra passar na rede
