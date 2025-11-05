import { useColorScheme } from '@/hooks/useColorScheme';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { PortalHost } from '@rn-primitives/portal';
import { Stack } from "expo-router";
import "C:/Projects/mini project 7/my-app/global.css";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  return(
    <>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      {/* Children of <Portal /> will render here */}
      <PortalHost />
      </ThemeProvider>
    </>
  );
}
