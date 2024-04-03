import Box from "@src/components/Box/Box";
import ButtonBase from "@src/components/Button/ButtonBase";
import Text from "@src/components/Text/Text";
import Icon from "@src/components/icon/icon";
import { useTheme } from "@src/theme/ThemeProvider";

export default function Menu() {
  const theme = useTheme();
  const baseSize = '40px';
  return (
    <Box
      stylesheet={{
        width: '100%',
        justifyContent: 'space-between',
        position: 'absolute',
        left: 0, right: 0, top: 0,
        flexDirection: 'row',
        paddingVertical: '16px',
        paddingHorizontal: '20px',
        color: theme.colors.neutral.x000
      }}
    >
      <ButtonBase
        stylesheet={{
          width: baseSize,
          height: baseSize,
          backgroundColor: theme.colors.primary.x500,
          borderRadius: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.primary.x400
          },
          focus: {
            backgroundColor: theme.colors.primary.x600
          }
        }}
      >
        <Text>
          P
        </Text>
      </ButtonBase>

      <ButtonBase
        stylesheet={{
          borderRadius: '100%',
          backgroundColor: theme.colors.neutral.x500,
          width: baseSize,
          height: baseSize,
          alignItems: 'center',
          justifyContent: 'center',
          hover: {
            backgroundColor: theme.colors.neutral.x400
          },
          focus: {
            backgroundColor: theme.colors.neutral.x600
          }
        }}
      >
        <Icon name="menu" />
      </ButtonBase>
    </Box>
  )
}
