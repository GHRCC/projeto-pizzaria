import AppBar from "@/components/appBar";
import { Login } from "@/components/login/login";
import { Button } from "@/components/Button/button";
import Link from "next/link";

export default function SignUp() {
  return (
    <main>
      <div className="bg-white font-sans text-red-500 mx-auto p-4">
        <AppBar />
      </div>
      <div className="m-8 w-auto h-1/2 bg-white text-red-500 flex flex-col text-center items-center">
        <h1>Criar conta</h1>
        <form className="flex flex-col m-3">
          <Login placeholder="Digite seu nome" type="text" />
          <Login placeholder="Digite seu email" type="text" />
          <Login placeholder="Digite sua senha" type="password" />
          <Button type="submit" loading={false}>
            Cadastrar
          </Button>
        </form>
        <Link href="/" className="cursor-pointer">
          Já possui uma conta? Faça o login!
        </Link>
      </div>
    </main>
  );
}
