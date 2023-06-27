import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
export default function AppBar() {
  return (
    <div className=" flex w-auto bg-white text-blue-600 p-4 justify-between text-lg">
      <h1> Sungrano Pizzaria</h1>
      <div className="flex gap-2 justify-between">
        <Link href={"/pizzas"}>Pizzas</Link>
        <button onClick={() => signOut()}>Deslogar</button>
      </div>
    </div>
  );
}
