import { Raleway } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import Header from './Header';
import "./CSS/Style.css"
import Footer from './Footer';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['400'] 
})


export const metadata = {
  title: 'Rizvi Ahmed Abbas',
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
      <Header />
      <div> {children}</div>
      <Footer />
        
      </body>
    </html>
  )
}
