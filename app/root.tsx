import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import styles from "./tailwind.css";
import tailwind from "./styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailwind },
];

export const meta: MetaFunction = () => ({
  "application-name": "Hep Skip Hire",
  charset: "utf-8",
  title: "Hep Skip Hire",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste",
});

export default function App() {
  return (
    <html lang="en" data-theme="hep">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
