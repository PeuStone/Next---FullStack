import { NextApiRequest, NextApiResponse } from "next";
import { createClient } from "@supabase/supabase-js";

// Supabase Setup
// ==============
const SUPABASE_URL = "https://gebawyropvzbglnaleck.supabase.co"
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdlYmF3eXJvcHZ6YmdsbmFsZWNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMxODM3NzYsImV4cCI6MjAyODc1OTc3Nn0.TBme05XdGIJ-dw62owQyw0p4EIGuP2StM2ZIjT9wFuo"
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
    res
      .status(httpStatus.Success)
      .json({ message: "Post request!" })
  },
  async GET(req: NextApiRequest, res: NextApiResponse) { // Retorna coisas
    const { data, error } = await dbClient.from("newsletter_users")
      .select("*")
    console.log(data);
    console.log(error);

    res
      .status(httpStatus.Success)
      .json({ message: "Get request!", data })
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
