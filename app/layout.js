import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://wagmiboys.xyz"),
  title: "WAGMI Boys - We're So Early",
  description:
    "A tribe of 10,000 degens who have no idea what they're doing - and are absolutely going to make it anyway. An animated crypto-comedy series and a 10,000-PFP project on Solana.",
  keywords: ["WAGMI Boys", "NFT", "Solana", "PFP", "crypto", "animated series"],
  openGraph: {
    title: "WAGMI Boys - We're So Early",
    description:
      "A tribe of 10,000 degens who have no idea what they're doing - and are absolutely going to make it anyway.",
    url: "https://wagmiboys.xyz",
    siteName: "WAGMI Boys",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WAGMI Boys - We're So Early",
    description:
      "A tribe of 10,000 degens who have no idea what they're doing - and are absolutely going to make it anyway.",
    creator: "@Wagmi_Boys",
  },
};

export const viewport = {
  themeColor: "#12101B",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
