import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import templatePageHOC from "@src/services/template/templatePageHOC";
import type { PostProps } from "@src/services/posts/PostsService";

interface HomeScreenProps {
  posts: PostProps[];
}

function HomeScreen(props : HomeScreenProps) {
  const theme = useTheme();

  return (
    <Box
      tag='main'
      stylesheet={{
        backgroundColor: theme.colors.neutral.x000,
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Background />
      <Menu />
      <Feed>
        <Feed.Header />
        <Feed.Posts posts={props.posts} />
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
})
