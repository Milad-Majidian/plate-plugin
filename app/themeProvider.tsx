import { siteConfig } from "@/config/site";
import { fontSans } from "@/lib/fonts";
import { TooltipProvider } from "@/components/plate-ui/tooltip";
import { SiteHeader } from "@/components/site/site-header";
import { TailwindIndicator } from "@/components/site/tailwind-indicator";
import { ThemeProvider } from "@/components/site/theme-provider";

import "@/styles/globals.css";

import { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

interface PlateThemeProvider {
  children: React.ReactNode;
}

export default function PlateThemeProvider({ children }: PlateThemeProvider) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="light">
        <TooltipProvider
          disableHoverableContent
          delayDuration={500}
          skipDelayDuration={0}
        >
          <div className="relative flex min-h-screen flex-col">
            <SiteHeader />
            <div className="flex-1">{children}</div>
          </div>
          <TailwindIndicator />
        </TooltipProvider>
      </ThemeProvider>
    </>
  );
}