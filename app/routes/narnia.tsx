import { Outlet } from "remix";

export default function Narnia() {
  return (
    <main className="p-8 h-full w-full bg-green-700">
      <h1>Bem vindo a Narnia!</h1>
      <Outlet />
    </main>
  );
}
