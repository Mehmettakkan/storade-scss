
export const metadata = {
  title: "Storade",
  description: "Envanter yönetimi ile işletmenizi büyütün.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
