import "@/app/ui/global.css"
import { notoSansSc } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={`${notoSansSc.className} antialiased`}>{children}</body>
    </html>
  );
}
