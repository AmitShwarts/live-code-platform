import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Live Code Platform',
  description: 'Code live with your friends!',
}

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex">
          <div id="blob1"/>
          <div id="blob2"/>
          <div id="effective" className='flex'>
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
