import { useState, useEffect, useContext } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { UserAuthInfo } from "../types/auth";
import { useRouter, Redirect } from "expo-router";
import Constants from "expo-constants";
import { useSession } from "../context/AuthContext";

export default function Login(): React.ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorAuth, setIsErrorAuth] = useState(false);
  const [isPassShown, setIsPassShown] = useState(false);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const router = useRouter();
  const { signIn, session } = useSession();

  const handleLogin = async () => {
    const payload = {
      username,
      password,
    } as UserAuthInfo;

    console.log("Clicked sign in");
    await signIn(payload);

    console.log("routing to the home page");
    router.replace("/");
  };

  useEffect(() => {
    if (username && password) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  }, [username, password]);

  if (session) {
    return <Redirect href="/" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title} variant="titleLarge">
          Log in
        </Text>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextInput
          mode="outlined"
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={!isPassShown}
          right={
            <TextInput.Icon
              onPress={() => setIsPassShown((prevValue) => !prevValue)}
              icon="eye"
            />
          }
        />
      </View>

      <Button
        style={{ marginBottom: 10 }}
        disabled={isLoginButtonDisabled}
        mode="contained"
        onPress={handleLogin}
      >
        Log in
      </Button>

      {isErrorAuth && <Text>Incorrect username or password</Text>}

      <Button
        mode="outlined"
        icon="arrow-right"
        contentStyle={{ flexDirection: "row-reverse" }}
        onPress={() => router.replace("/register")}
      >
        Register
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight + 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },
  title: {
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  inputContainer: {
    width: "80%",
    marginBottom: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
});
