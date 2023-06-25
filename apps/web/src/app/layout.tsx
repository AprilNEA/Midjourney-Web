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
              "bg-white p-2.5",
              "min-h-[30rem] min-w-[37.5rem] max-w-[75rem]",
              "rounded-3xl border-slate-200",
              "flex flex-row"
            )}
          >
            <div className={clsx("top-0 box-border h-full w-64 bg-second p-5")}>
              <Sidebar />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
