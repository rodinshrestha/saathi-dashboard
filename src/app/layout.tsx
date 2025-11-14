import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import StyledComponentsRegistry from "@/lib/registry";
import BaseProvider from "@/providers/BaseProvider";
import StyledProviders from "@/providers/StyledProviders";
import { SwrConfigProviders } from "@/providers/SwrConfigProviders";

export const metadata: Metadata = {
  title: "Sathi Dashboard",
  description: "Dashboard created by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <StyledComponentsRegistry>
          <SwrConfigProviders>
            <StyledProviders>
              <ToastContainer theme="colored" />
              <BaseProvider>{children}</BaseProvider>
            </StyledProviders>
          </SwrConfigProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
