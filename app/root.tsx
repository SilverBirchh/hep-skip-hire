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
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preload",
    as: "font",
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;900&display=swap",
  },
  { rel: "stylesheet", href: styles },
  { rel: "stylesheet", href: tailwind },
];

export const meta: MetaFunction = () => ({
  "application-name": "Hep Skip Hire",
  charset: "utf-8",
  title: "Hep Skip Hire",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Skip Hire for household clearances, garden clearances, builders/trade waste, industrial/factory waste in London, Greater London, Hertfordshire and buckinghamshire.",
  keywords:
    "Skip Hire, London, Greater London, Hertfordshire and Buckinghamshire",
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
