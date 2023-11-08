export interface Post {
  slug?: string
  publicationDate: string | null
  tags?: string[]
  title: string
  subtitle: string
  author: string
}

export interface HomeProps {
  posts: Post[]
}
