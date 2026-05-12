import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  icons: { icon: '/favicon.svg' },
  title: 'FinTech & PropTech Intelligence | Crossover Research for FT Partners',
  description: 'Primary Voice of Customer research for FinTech and PropTech IB mandates.',
  openGraph: {
    title: 'FinTech & PropTech Intelligence | Crossover Research',
    description: 'Primary Voice of Customer research for FinTech and PropTech IB mandates. 30+ sell-side engagements, 60% mandate win rate.',
    siteName: 'Crossover Research',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body style={{ margin: 0, background: '#050d1a' }}>
        {children}
      </body>
    </html>
  );
}
