import "~/styles/globals.css";
import Providers from "./providers";

export const metadata = {
  title: "Evelan Prisma Editor | Visualize and Edit Prisma Schemas",
  description:
    "Evelan Prisma Editor: Professional Prisma Schema Editor and visualization tool. Visualize and edit Prisma schemas with ease.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
