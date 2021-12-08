import { Link } from "remix";

export default function Outside() {
  return (
    <>
      <h6>Você saiu do castelo!</h6>

      <Link to="/narnia">Voltar</Link>
    </>
  );
}
