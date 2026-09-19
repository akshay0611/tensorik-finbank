import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { BankProvider } from '@/components/phase3-pages'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tensorik FinBank | Digital Banking Experience',
  description: 'A polished digital banking capability demo by Tensorik Technologies.',
  generator: 'Tensorik Technologies',
}

export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f8fafb', userScalable: true }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className="antialiased"><BankProvider>{children}</BankProvider>{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
