import Link from 'next/link'
import { PostProps } from './types'
import { FiCalendar, FiUser } from 'react-icons/fi'

export default function Post({
  title,
  descripition,
  publishDate,
  name,
  link,
}: PostProps) {
  return (
    <Link
      href={`/post/${link}`}
      className="max-w-[700px] flex flex-col items-start gap-2 py-8"
    >
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-gray-200 text-lg mb-3">{descripition}</p>
      <div className="flex items-center gap-6 text-gray-300">
        <span className="flex items-center gap-1">
          <FiCalendar color="#BBBBBB" />
          {publishDate}
        </span>
        <span className="flex items-center gap-1">
          <FiUser color="#BBBBBB" />
          {name}
        </span>
      </div>
    </Link>
  )
}
