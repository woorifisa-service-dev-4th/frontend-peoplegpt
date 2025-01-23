import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({ children }) {
  return (

    <html lang="kr" className={`${pretendard.variable}`}>
      <body
        className={`${pretendard.variable}`}
      >        
        {children}
      </body>
    </html>
  );
}
