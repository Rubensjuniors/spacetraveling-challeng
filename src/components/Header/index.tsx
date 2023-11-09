import Image from 'next/image'
import Link from 'next/link'

import Logo from '../../../public/logo.svg'

export default function Header() {
  return (
    <header className="w-full z-10 sticky top-0 left-0 backdrop-blur-lg shadow-md">
      <div className="max-w-4xl py-12 pt-16 m-0-auto flex justify-center md:justify-start">
        <Link href="/">
          <Image src={Logo} alt="spacetraveling_logo" />
        </Link>
      </div>
    </header>
  )
}
