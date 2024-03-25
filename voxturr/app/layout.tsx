import dynamic from "next/dynamic";
// import Route from "@/src/utils/Route"
const Route = dynamic(() => import("@/src/utils/Route"));
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Route>{children}</Route>
      </body>
    </html>
  );
}
