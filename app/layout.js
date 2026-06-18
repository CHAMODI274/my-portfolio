import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chamodi | Full-Stack Developer',
  description: 'Portfolio of Chamodi — Full-Stack Developer based in Sri Lanka.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  )
}