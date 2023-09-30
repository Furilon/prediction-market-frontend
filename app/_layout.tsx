import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useReducer, useState, useMemo, createContext } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import authenticate from "../utils/authenticate";
import { UserAuthInfo, UserRegisterInfo } from "../types/auth";
import setToken from "../utils/setToken";
import register from "../utils/register";
import { AuthContext } from "../context/AuthContext";
import getMarkets from "../utils/getMarkets";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();
  const [state, dispatch] = useReducer(reducer, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  const authContext = useMemo(
    () => ({
      signIn: async (data: UserAuthInfo) => {
        let token;
        try {
          token = authenticate(data);
          console.log(
            "Authenticated and received the following token: " + token
          );
        } catch (e: any) {
          console.log(e.message);
          return;
        }

        dispatch({ type: "SIGN_IN", token });
      },
      signOut: () => {
        console.log("Signed out");
        dispatch({ type: "SIGN_OUT" });
      },
      signUp: async (data: UserRegisterInfo) => {
        let token;
        try {
          token = register(data);
          console.log("Registered and received the following token: " + token);
        } catch (e: any) {
          console.log(e.message);
          return;
        }

        dispatch({ type: "SIGN_IN", token });
      },
    }),
    []
  );

  useEffect(() => {
    const bootstrapAsync = async () => {
      let jwtToken;
      let markets;

      try {
        jwtToken = await AsyncStorage.getItem("token");
        console.log(jwtToken);
        console.log(typeof jwtToken);
      } catch (e: any) {
        console.log("Restroing token failed");
        console.log(e.message);
        console.log("Logging out");
        authContext.signOut();
        console.log(state.userToken);
        return;
      }

      if (jwtToken == null) {
        authContext.signOut();
        return;
      }

      // After restoring token, we may need to validate it in production apps
      try {
        markets = await getMarkets(jwtToken as string);
        console.log(markets);
      } catch (e: any) {
        console.log("Token is invalid");
        console.log(e.message);
        console.log("Logging out");
        authContext.signOut();
        console.log(state.userToken);
        return;
      }

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // dispatch({ type: "RESTORE_TOKEN", token: jwtToken });
    };

    bootstrapAsync();
  }, []);

  return (
    <PaperProvider>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AuthContext.Provider value={authContext}>
          <Stack>
            {state.userToken == null ? (
              <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            ) : (
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            )}
          </Stack>
        </AuthContext.Provider>
      </ThemeProvider>
    </PaperProvider>
  );
}

function reducer(prevState: any, action: any) {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.token,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isSignout: true,
        userToken: null,
      };
  }
}
