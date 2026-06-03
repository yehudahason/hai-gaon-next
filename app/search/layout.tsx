import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "חפש בספרים",
  description: "Search books",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
