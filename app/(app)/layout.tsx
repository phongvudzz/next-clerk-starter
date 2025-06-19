import type { Metadata } from "next";
import { fontVariables } from "@/lib/fonts";
import { ThemeProvider } from "@/providers/theme-provider";
import { ClerkProviderWrapper } from "@/providers/clerk-provider";
import "@/styles/globals.css";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Next.js Clerk Starter",
  // TODO: Add description
  description: "Next.js Clerk Starter Template - by Phong Vu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProviderWrapper>
      <html lang="en" suppressHydrationWarning className="scroll-smooth">
        <body className={`${fontVariables} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProviderWrapper>
  );
}
