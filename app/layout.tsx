import type { Metadata } from 'next';
import Script from 'next/script'
import { Topbar } from '../components/Topbar'
import { TabNav } from '../components/TabNav'
import { Footer } from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'Crossover Research — Voice of Customer Intelligence',
  description: 'Independent primary research for investment bankers, operators, and funds. The same verified customer truth — different strategic framing for each audience.',
  openGraph: {
    title: 'Crossover Research — Voice of Customer Intelligence',
    description: 'Win mandates with customer evidence no competing bank has. The first dual-sided intelligence product for banked transactions.',
    siteName: 'Crossover Research',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <Topbar />
        <TabNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
