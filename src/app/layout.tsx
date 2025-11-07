import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";

import StyledComponentsRegistry from "@/lib/registry";
import StyledProviders from "@/providers/StyledProviders";

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
          <StyledProviders>
            <ToastContainer theme="colored" />
            {children}
          </StyledProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
