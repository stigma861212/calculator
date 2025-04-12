import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Next.js 計算器",
  description: "一個簡單的 Next.js 應用程式",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="h-full overflow-y-scroll">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="flex flex-col h-full min-h-screen">
        <div className="top-0 z-50 sticky p-4 border-b">
          <div className="mx-auto max-w-7xl">
            <NavigationMenu>
              <NavigationMenuList className="justify-center">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/">首頁</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Button variant="ghost" asChild>
                      <Link href="/calculator">計算器</Link>
                    </Button>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        <main className="flex-1">
          <div className="flex mx-auto w-full max-w-7xl h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
