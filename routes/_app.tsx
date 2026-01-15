import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts";

export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ellie Parkinson</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <header>
          <h1>Ellie Parkinson [Web Architect]</h1>
        </header>
        <nav>
          <menu>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/projects">Projects</a>
            </li>
            <li>
              <a href="/cv">CV</a>
            </li>
          </menu>
        </nav>
        <Component />


        <script src={asset("main.js")} async defer />
      </body>
    </html>
  );
}
