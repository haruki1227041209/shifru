import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({ subsets: ["latin"] });

export const metadata = {
  title: "Shifru",
  description: "シフト管理アプリ「Shifru」シフトの登録、管理がスムーズに。",
  icons: {
    apple: "/shifru.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}</body>
    </html>
  );
}
