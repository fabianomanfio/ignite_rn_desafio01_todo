import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { theme } from "./src/theme";

import { Home } from './src/screens/Home';


export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

    if (!fontsLoaded && !fontError) {
      return null;
    }

  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={theme.colors.gray700}
        translucent={false}
      />

      <Home />
    </>
  );
}

