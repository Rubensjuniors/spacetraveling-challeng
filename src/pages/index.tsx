import { Post } from '@/components'

export default function Home() {
  return (
    <main className="max-w-4xl md:p-0 p-3 m-0-auto flex flex-col">
      <Post
        title="Criando um app CRA do zero"
        descripition="Tudo sobre como criar a sua primeira aplicação utilizando Create React App"
        publishDate={new Date()}
        name="rubens junio"
        link="/ss"
      />
      <Post
        link="/ss"
        title="Criando um app CRA do zero"
        descripition="Tudo sobre como criar a sua primeira aplicação utilizando Create React App"
        publishDate={new Date()}
        name="rubens junio"
      />
    </main>
  )
}
