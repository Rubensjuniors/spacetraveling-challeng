import getPrismicClient from '@/services/Prismic'
import Prismic from '@prismicio/client'
import { GetStaticPaths, GetStaticProps } from 'next'
import { PostProps } from './types'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { RichText } from 'prismic-dom'
import Head from 'next/head'
import Image from 'next/image'
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi'

export default function Post({ post }: PostProps) {
  const totalWord = post?.data?.content.reduce((total, contentItem) => {
    total += contentItem?.heading?.split(' ').length
    const words = contentItem?.body?.map((tem) => tem?.text?.split(' ').length)
    words.map((word) => (total += word))

    return total
  }, 0)
  const readingTime = Math.ceil(totalWord / 200)

  return (
    <>
      <Head>
        <title>{post.data.title}</title>
      </Head>

      <section>
        <div>
          <Image
            src={post.data.banner.url}
            alt={''}
            className="w-full"
            width={post.data.banner.width}
            height={post.data.banner.height}
          />
        </div>

        <div className="max-w-4xl m-0-auto mb-8">
          <div className="flex flex-col gap-5 items-start my-8">
            <h1 className="text-5xl font-bold">{post.data.title}</h1>
            <ul className="flex items-center gap-10">
              <li className="flex items-center gap-2">
                <FiCalendar color="#BBBBBB" size="20" />
                {post.last_publication_date}
              </li>
              <li className="flex items-center gap-2">
                <FiUser color="#BBBBBB" size="20" />
                {post?.data?.author}
              </li>
              <li className="flex items-center gap-2">
                <FiClock color="#BBBBBB" size="20" />
                {`${readingTime} min`}
              </li>
            </ul>
          </div>
          {post?.data?.content.map((content) => (
            <article className="my-6" key={content.heading}>
              <h2 className="text-5xl font-bold">{content.heading}</h2>
              <div
                className="postContent"
                dangerouslySetInnerHTML={{
                  __html: RichText.asHtml(content.body),
                }}
              />
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient()
  // vou procurar em um documento com o tipo posts
  const posts = await prismic.query(
    Prismic.Predicates.at('document.type', 'posts'),
  )

  const paths = posts.results.map((post) => ({
    params: {
      slug: post.uid,
    },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient()
  const response = await prismic.getByUID('posts', String(params?.slug), {})

  const post = {
    uid: response.uid,
    first_publication_date: format(
      new Date(response.first_publication_date ?? ''),
      'dd MMM yyyy',
      {
        locale: ptBR,
      },
    ),
    last_publication_date: format(
      new Date(response.last_publication_date ?? ''),
      'dd MMM yyyy',
      {
        locale: ptBR,
      },
    ),
    tags: response.tags,
    data: {
      title: response.data.title,
      subtitle: response.data.subtitle,
      author: response.data.author,
      banner: {
        url: response.data.banner.url,
        width: response.data.banner.dimensions.width,
        height: response.data.banner.dimensions.height,
      },
      content: response.data.content.map(
        (content: { heading: string; content: string[] }) => {
          return {
            heading: content.heading,
            body: [...content.content],
          }
        },
      ),
    },
  }

  return {
    props: {
      post,
    },
    revalidate: 60 * 5, // 5 minutes
  }
}

// ?.results.map((post) => {
//   const { uid, data, first_publication_date: publishDate, tags } = post
//   return {
//     slug: uid,
//     publicationDate: format(new Date(publishDate ?? ''), 'dd MMM yyyy', {
//       locale: ptBR,
//     }),
//     title: data.title,
//     subtitle: data.subtitle,
//     author: data.author,
//     tags,
//   }
// })
