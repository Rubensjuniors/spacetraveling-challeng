export default function Post() {
  return <></>
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient({});
//   const posts = await prismic.getByType(TODO);

//   // TODO
// };

// export const getStaticProps: GetStaticProps = async () => {
//   const prismic = getPrismicClient({})

//   const posts = await prismic.query(
//     Prismic.Predicates.at('document.type', 'posts')
//   )

//   console.log(prismic)

//   return {
//     props: {
//       p: {},
//     },
//   }
// }
