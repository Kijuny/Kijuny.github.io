import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kijuny.github.io/" || ""),
  title: {
    default: "방기준 | 백엔드 개발자",
    template: "%s | " + "방기준 | 백엔드 개발자",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description: "백엔드 개발자 방기준의 프로필입니다.",
  openGraph: {
    title: "방기준 | 백엔드 개발자",
    description: "백엔드 개발자 방기준의 개인 프로필",
    siteName: "방기준 | 백엔드 개발자",
    locale: "ko_KR",
    type: "website",
    url: "https://kijuny.github.io/",
    images: "/profile_image_s.jpeg",
  },
  verification: {
    google: "pRPN-BmdTsKaq8sV54qT1Mb99HTaYDPNfFbLg8_t8Oc",
  },
  // robots: {
  //   index: isProduction,
  //   follow: isProduction,
  //   googleBot: {
  //     index: isProduction,
  //     follow: isProduction,
  //     "max-image-preview": "standard",
  //     "max-snippet": -1,
  //   },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable}`}>
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
