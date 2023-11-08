import getPrismicClient from '@/services/Prismic'
import { Post } from '@/components'
import { GetStaticProps } from 'next'
import Prismic from '@prismicio/client'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { HomeProps } from './types'

export default function Home({ posts }: HomeProps) {
  return (
    <main className="max-w-4xl md:p-0 p-3 m-0-auto flex flex-col mt-3">
      {posts &&
        posts.map((post) => {
          return (
            <Post
              key={post.slug}
              title={post.title}
              descripition={post.subtitle}
              publishDate={post.publicationDate ?? ''}
              name={post.author}
              link={post.slug ?? ''}
            />
          )
        })}
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient()

  const response = await prismic.query(
    [Prismic.predicates.at('document.type', 'posts')],
    {
      fetch: ['posts.title', 'posts.subtitle', 'posts.author'],
      pageSize: 100,
    },
  )

  const posts = response.results.map((post) => {
    const { uid, data, first_publication_date: publishDate, tags } = post
    return {
      slug: uid,
      publicationDate: format(new Date(publishDate ?? ''), 'dd MMM yyyy', {
        locale: ptBR,
      }),
      title: data.title,
      subtitle: data.subtitle,
      author: data.author,
      tags,
    }
  })

  return {
    props: {
      posts,
    },
    revalidate: 60 * 5, // 5 minutes
  }
}
