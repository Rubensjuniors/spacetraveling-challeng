import type { AppProps } from 'next/app'
import { Header } from '@/components'

import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
    </div>
  )
}
