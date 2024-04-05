import PostsServices from '@src/services/posts/PostsService';
import { withTemplateConfig } from '@src/services/template/withTemplateConfig';
export { default } from '@src/screens/HomeScreen/HomeScreen';

export async function getStaticProps() {
  const posts = await PostsServices().getAll();
  console.log('Posts', posts.length);

  return {
    props: await withTemplateConfig({
      posts,
    })
  }
}
