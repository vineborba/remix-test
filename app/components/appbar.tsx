import { Link } from "remix";

interface Routes {
  to: string;
  label: string;
}

const routes: Array<Routes> = [
  { to: "/", label: "Home" },
  { to: "/narnia", label: "Narnia" },
  { to: "/space", label: "Espaço" },
];

export default function AppBar() {
  return (
    <header className="w-full bg-indigo-400 flex justify-center">
      <section className="flex flex-row max-w-5xl">
        {routes.map((route) => (
          <Link to={route.to} className="flex justify-center items-center bg-green-300 py-2 px-4 mx-2">
            {route.label}
          </Link>
        ))}
      </section>
    </header>
  );
}
