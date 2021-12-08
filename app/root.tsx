import type { LinksFunction } from "remix";
import { LiveReload, Outlet, Links } from "remix";
import { useState } from "react";

import styles from "./tailwind.css";

import AppBar from "./components/appbar";

export let links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: "https://unpkg.com/modern-css-reset@1.4.0/dist/reset.min.css"
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  const [value, setValue] = useState('');

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Remix: it is actually great!</title>
        <Links />
      </head>
      <body className="h-screen w-screen">
        <AppBar />
        <Outlet />
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  );
}
