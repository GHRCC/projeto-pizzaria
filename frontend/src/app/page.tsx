// "use client";
// import { useContext, FormEvent } from "react";
// import AppBar from "@/components/appBar";
// import { Login } from "@/components/login/login";
// import { Button } from "@/components/Button/button";
// import Link from "next/link";
// import { getSession, signIn } from "next-auth/react";
// import { GetServerSideProps } from "next";

// export default function Home() {
//   const onSubmit = (e: FormEvent) => {
//     e.preventDefault();
//     signIn("credentials");
//   };
//   return (
//     <main>
//       <div className="bg-white font-sans text-red-500 mx-auto p-4">
//         <AppBar />
//       </div>
//       <div className="m-8 w-auto h-1/2 bg-white text-red-500 flex flex-col text-center items-center">
//         <h1>Login</h1>
//         <form onSubmit={onSubmit} className="flex flex-col m-3">
//           <Login placeholder="Digite seu email" type="text" />
//           <Login placeholder="Digite sua senha" type="password" />
//           <button type="submit">Acessar</button>
//         </form>
//         <Link href="/signup" className="cursor-pointer">
//           Não possui uma conta? Cadastre-se agora!
//         </Link>
//       </div>
//     </main>
//   );
// }
"use client";

import { useSession, signOut } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession({
    required: true,
  });

  if (status === "loading") {
    return <></>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      This is a protected page.
      <button onClick={() => signOut()}>Deslogar</button>
    </div>
  );
}
