import Image from 'next/image'

import Logo from '../../../public/logo.svg'

export default function Header() {
  return (
    <header className="max-w-4xl py-12 pt-16 m-0-auto">
      <Image src={Logo} alt="spacetraveling_logo" />
    </header>
  )
}
