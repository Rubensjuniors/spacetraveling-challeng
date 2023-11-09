export interface Post {
  first_publication_date: string | null
  last_publication_date: string | null
  tags: string[]
  data: {
    title: string
    banner: {
      url: string
      width: number
      height: number
    }
    author: string
    content: {
      heading: string
      body: {
        text: string
      }[]
    }[]
  }
}
export interface PostProps {
  post: Post
}
