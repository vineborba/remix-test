import { Link } from "remix";

export default function IndexNarnia() {
  return (
    <div className="flex flex-col">
      <h4>Você está dentro de um castelo, caro heró!</h4>
      <Link to="outside">Sair</Link>
    </div>
  );
}
