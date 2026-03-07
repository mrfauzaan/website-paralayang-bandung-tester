import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paralayang Bandung",
  description: "Terbang di Atas Langit Jawa Barat",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
