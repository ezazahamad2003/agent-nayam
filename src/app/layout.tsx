import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agent Nayam - AI Contract Review & Compliance',
  description: 'Streamline contract review & compliance with AI. Auto-flag deviations, reduce review cycles by 50%, and cut external counsel spend by 30%.',
  keywords: 'AI, contract review, compliance, legal tech, automation',
  authors: [{ name: 'Agent Nayam Team' }],
  openGraph: {
    title: 'Agent Nayam - AI Contract Review & Compliance',
    description: 'Revolutionary AI agent for contract review and compliance automation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
