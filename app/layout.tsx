import Script from 'next/script'
import { Topbar } from '../components/Topbar'
import { Footer } from '../components/Footer'
import './globals.css'

export const metadata = {
  title: 'Red Canary & BlueCat Networks - VoC Intelligence | Crossover Research',
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
        <Topbar
          title="Red Canary & BlueCat Networks - VoC Intelligence"
          subtitle="Banker Intelligence"
        />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
