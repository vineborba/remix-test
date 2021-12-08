import { Outlet } from "remix";

export default function Narnia() {
  return (
    <main className="p-8 bg-gray-900 text-gray-300 h-full w-full">
      <h1>Bem vindo ao Espaço!</h1>
      <Outlet />
    </main>
  );
}
