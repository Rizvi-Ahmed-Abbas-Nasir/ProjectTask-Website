
import { Lobster } from 'next/font/google'
import { Rokkitt } from 'next/font/google'
import { Oswald } from 'next/font/google'
import { Courgette } from 'next/font/google'
import { Montserrat } from 'next/font/google'
import FrontPage from './Pages/FrontPage'
import Featured from './Pages/Featured'
import Service from './Pages/Service'
import HowITWorks from './Pages/HowITWorks'
import Providers from './Pages/Providers'
import Plans from './Pages/Plans'
import Download from './Pages/Download'
import TopProviders from './Pages/TopProviders'
import Recent from './Pages/Recent'
import Partners from './Pages/Partners'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600'] 
})


// Fonts Families
const lobster  = Lobster ({ 
  subsets: ['latin'],
  weight: ['400'] 
})

const rokkitt  = Rokkitt ({ 
  subsets: ['latin'],
  weight: ['200'] 
})


const oswald  = Oswald ({ 
  subsets: ['latin'],
  weight: ['200'] 
})

const courgette = Courgette({ 
  subsets: ['latin'],
  weight: ['400'] 
})

// $$

export default function Home() {
  return (
    <div className='HomePage'>
      <FrontPage />
      <Featured />
      <Service />
      <HowITWorks />
      <Featured />
      <Providers />
      <Plans />
      <Download />
      <TopProviders />
      <Recent />
      <Partners />

    </div>
  )
}
