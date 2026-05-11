import type { Metadata } from "next";
import {
  poppinsFont,
  interFont,
  cinzelDecorativeFont,
  latoFont,
  manropeFont,
  plusJakartaSansFont,
} from "../config/fonts";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeProviderWrapper from "@/providers/themeProviderWrapper";
import { ToasterProvider } from "@/providers/ToasterProvider";
import ReduxProviderWrapper from "@/providers/reduxProviderWrapper";
import QueryClientProviderWrapper from "@/providers/queryClientProviderWrapper";
import "../styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html
      lang="en"
      className={`${poppinsFont.variable} ${interFont.variable} ${cinzelDecorativeFont.variable} ${latoFont.variable} ${manropeFont.variable} ${plusJakartaSansFont.variable}`}
    >
      {/* ✅ أضفنا head فيها meta viewport */}
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>

      <body>
        <ReduxProviderWrapper>
          <QueryClientProviderWrapper>
            <AppRouterCacheProvider>
              <ThemeProviderWrapper>
                <ToasterProvider>{children}</ToasterProvider>
              </ThemeProviderWrapper>
            </AppRouterCacheProvider>
          </QueryClientProviderWrapper>
        </ReduxProviderWrapper>
      </body>
    </html>
  );
}
