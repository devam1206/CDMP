import { Redirect } from 'expo-router';

export default function Index() {
  // @ts-ignore - Dynamic route typing issue
  return <Redirect href="/(tabs)" />;
}

