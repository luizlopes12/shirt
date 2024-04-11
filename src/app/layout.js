export const metadata = {
  title: "Shirt.",
  description: "A camiseta que você precisa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/x-icon" href="/img/favicon.svg"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
