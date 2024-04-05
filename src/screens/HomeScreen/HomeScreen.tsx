import Box from "@src/components/Box/Box";
import Background from "./patterns/Background/Background";
import Menu from "./patterns/Menu/Menu";
import Feed from "./patterns/Feed/Feed";
import Footer from "./patterns/Footer/Footer";
import { useTheme } from "@src/theme/ThemeProvider";
import templatePageHOC from "@src/services/template/templatePageHOC";

function HomeScreen() {
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
      </Feed>
      <Footer />
    </Box>
  )
}

export default templatePageHOC(HomeScreen, {
  title: "Home",
})
