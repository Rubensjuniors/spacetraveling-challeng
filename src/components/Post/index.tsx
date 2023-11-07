import Link from 'next/link'
import { PostProps } from './types'
import { format } from 'date-fns'
import { FiCalendar, FiUser } from 'react-icons/fi'
import { ptBR } from 'date-fns/locale'

export default function Post({
  title,
  descripition,
  publishDate,
  name,
  link,
}: PostProps) {
  return (
    <Link
      href={link}
      className="max-w-[700px] flex flex-col items-start gap-2 py-8"
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-200 text-lg mb-6">{descripition}</p>
      <div className="flex items-center gap-6 text-gray-300">
        <span className="flex items-center gap-1 mt-">
          <FiCalendar color="#BBBBBB" />
          {format(publishDate, 'dd MMM yyyy', {
            locale: ptBR,
          })}
        </span>
        <span className="flex items-center gap-1">
          <FiUser color="#BBBBBB" />
          {name}
        </span>
      </div>
    </Link>
  )
}
