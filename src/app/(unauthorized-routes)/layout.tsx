import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from 'next/image'
import "@/scss/global.scss"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Soluntech Technical Test',
  description: 'Prueba técnica para la empresa soluntech',
}

export default function RootLayout({children}: { children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className={`${inter.className} unauthorized-layout`}>
        <div className='unauthorized-layout__phone-container'>

        <Image
          className='unauthorized-layout__top-bar'  
          src="/assets/top-bar.jpg"
          width={500}
          height={59}
          alt="phone top bar"
        />
          
          {children}

        </div>
      </body>
    </html>
  )
}
