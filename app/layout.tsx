/* eslint-disable @next/next/no-head-element */
import Link from 'next/link';
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
        <body>
          <nav>
              <Link href="/">
                Home
              </Link>
              <Link href="/tasks">
                Tasks
              </Link>
            </nav>
          <main>
              {children}
          </main>
        </body>
    </html>
  );
}
