import clsx from "clsx";
import { Inter } from "next/font/google";
import Sidebar from "@/components/sidebar";

import "@/styles/tailwind.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Midjourney Web",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={clsx(inter.className, "h-full w-full bg-gray-100")}>
        <div
          className={clsx(
            "flex h-full items-center justify-center overflow-hidden",
            "touch-pan-x touch-pan-y select-none"
          )}
        >
          <div
            className={clsx(
              "h-[600px] w-[800px] bg-white",
              "min-h-[480px] min-w-[600px] max-w-[1200px]",
              "rounded-3xl border-slate-200",
              "flex flex-row"
            )}
          >
            <Sidebar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
