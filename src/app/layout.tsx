import './globals.css'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, Source_Sans_3 } from 'next/font/google'

const plex = IBM_Plex_Sans({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plex',
})

const source_sans = Source_Sans_3({
  weight: ['400', '500', '600', '700'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-source',
})

export const metadata: Metadata = {
  title: 'I\'m Fabian',
  description: 'I am a Software Developer with 20 years of experience in different environments and projects, working on highly performing teams and always focused on delivering client oriented solutions. My expertise revolves around Javascript and PHP (different frameworks and CMS), HTML, CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${plex.variable} ${source_sans.variable}`}>
      <body className={plex.className}>{children}</body>
    </html>
  )
}