import { View } from 'react-native';
import { Stack } from 'expo-router';
import { useCallback, useLayoutEffect } from 'react';
import { useFonts } from 'expo-font';
import {
  DMSans_500Medium,
  DMSans_700Bold,
  DMSans_400Regular,
} from '@expo-google-fonts/dm-sans';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useLayoutEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <Stack />
    </>
  );
}
