import type { Metadata } from "next";
import { cookies } from "next/headers";
import { ToastContainer } from "react-toastify";

import StyledComponentsRegistry from "@/lib/registry";
import StyledProviders from "@/providers/StyledProviders";
import { SwrConfigProviders } from "@/providers/SwrConfigProviders";

export const metadata: Metadata = {
  title: "Sathi Dashboard",
  description: "Dashboard created by next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mode = (await cookies()).get("mode")?.value;

  return (
    <html lang="en">
      <body className={` antialiased`}>
        <StyledComponentsRegistry>
          <SwrConfigProviders>
            <StyledProviders mode={mode}>
              <ToastContainer theme="colored" />
              {children}
            </StyledProviders>
          </SwrConfigProviders>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
