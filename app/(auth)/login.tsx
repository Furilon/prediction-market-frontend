import { useState, useEffect, useContext } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { UserAuthInfo } from "../../types/auth";
import authenticate from "../../utils/authenticate";
import { useRouter, Link } from "expo-router";
import Constants from "expo-constants";
import isToken from "../../utils/isToken";
import { AuthContext } from "../../context/AuthContext";

export default function Login(): React.ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isErrorAuth, setIsErrorAuth] = useState(false);
  const [isPassShown, setIsPassShown] = useState(false);
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const router = useRouter();
  const { signIn } = useContext(AuthContext);

  const handleLogin = () => {
    const payload = {
      username,
      password,
    } as UserAuthInfo;

    signIn(payload);
  };

  useEffect(() => {
    isToken().then((value) => (value ? router.push("/") : null));
  }, []);

  useEffect(() => {
    if (username && password) {
      setIsLoginButtonDisabled(false);
    } else {
      setIsLoginButtonDisabled(true);
    }
  }, [username, password]);

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
        onPress={() => router.push("/register")}
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
