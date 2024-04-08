import Box from "@src/components/Box/Box";
import Button from "@src/components/Button/Button";
import Icon from "@src/components/icon/icon";
import Image from "@src/components/Image/image";
import Link from "@src/components/Link/Link";
import Text from "@src/components/Text/Text";
import { useTheme } from "@src/theme/ThemeProvider";

interface FeedPostProps {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  tags: string[];
  image: string;
}

export function FeedPost({ title, excerpt, date, tags, url, image }: FeedPostProps) {
  const theme = useTheme();
  const postDate = new Date(date)
    .toLocaleDateString('pt-BR', { year: 'numeric', month: 'short', day: 'numeric' })
    .replace('.', '')
    .replace(/de /g, '');

  return (
    <Box
      stylesheet={{
        position: 'relative',
        paddingBottom: '35px',
      }}
    >
      <FeedPostSideTimeline />
      <Text
        variant="body4"
        stylesheet={{ fontWeight: 'bold', marginBottom: '32px', marginLeft: '4px' }}
      >
        {postDate}
      </Text>
      {/* Title, Excerpt */}
      <Link
        href={url}
        variant="body1"
        stylesheet={{
          marginBottom: '8px',
          display: 'inline',
        }}
        colorVariantEnabled={false}
      >
        <Box
          tag="span"
          stylesheet={{
            display: 'inline',
            padding: '2px',
            borderRadius: "4px",
            color: theme.colors.neutral.x800,
            backgroundColor: theme.colors.neutral.x200,
            hover: {
              color: theme.colors.primary.x900,
              backgroundColor: theme.colors.primary.x200,
            }
          }}
        >
          {title}
        </Box>
      </Link>
      {/* Resumo/Excerpt */}
      <Text
        variant="body3"
        stylesheet={{
          marginBottom: '20px'
        }}
      >
        {excerpt}
      </Text>
      {/* Tags */}
      <Box
        stylesheet={{
          flexDirection: 'row',
          gap: '4px',
        }}>
        {tags?.map((tag) => (
          <Link
            key={tag}
            href={`/tags/${tag}`}
            variant="body4"
            stylesheet={{
              color: theme.colors.neutral.x800,
              backgroundColor: theme.colors.neutral.x100,
              borderRadius: "1000px",
              padding: '6px 8px',
              hover: {
                color: theme.colors.primary.x900,
                backgroundColor: theme.colors.primary.x200,
              }
            }}
            colorVariantEnabled={false}
          >
            #{tag}
          </Link>
        ))}
      </Box>
      {/* Image */}
      {image && (
        <Button.Base
          href={url}
          stylesheet={{
            hover: {
              opacity: 0.8,
            }
          }}
        >
          <Image
            stylesheet={{
              width: "100%",
              marginTop: "29px",
              borderRadius: "12px",
            }}
            src={image}
            alt="Image Description"
          />
        </Button.Base>
      )}
    </Box>
  )
}

function FeedPostSideTimeline() {
  const theme = useTheme();

  return (
    <Box
      stylesheet={{
        position: 'absolute',
        top: 0, bottom: 0,
        color: theme.colors.neutral.x200,
        marginLeft: '-16px',
      }}
    >
      <Icon
        size="sm"
        name="github"
        stylesheet={{
          transform: {
            xs: 'translateX(-50%) scale(.9)',
            sm: 'translateX(-50%)',
          },
          position: 'absolute',
          top: '0',
          left: '0',
        }}
      />
      <Box
        stylesheet={{
          top: "16px",
          bottom: "0",
          margin: "auto",
          position: "absolute",
          width: '1px',
          backgroundColor: 'currentColor',
        }}
      />
    </Box>
  )
}
