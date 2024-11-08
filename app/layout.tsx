import type { Metadata } from "next";
import MainNavbar from "@/components/core/main-navbar/main-navbar";

import "./index.css";
import Providers from "./Providers";


export const metadata: Metadata = {
  title: "بصير",
  description: "لمجتمعات عمرانية حديثة", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (l) {
                if (l.search[1] === "/") {
                  var decoded = l.search
                    .slice(1)
                    .split("&")
                    .map(function (s) {
                      return s.replace(/~and~/g, "&");
                    })
                    .join("?");
                  window.history.replaceState(null, null, l.pathname.slice(0, -1) + decoded + l.hash);
                }
              })(window.location);
            `,
          }}
        />
      </head>
      <body
      >
         <div className="min-h-screen flex flex-col">
         <MainNavbar />
         <Providers>{children}</Providers>
         </div>
      </body>
    </html>
  );
}
