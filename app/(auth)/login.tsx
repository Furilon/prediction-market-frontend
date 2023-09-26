import { useState, useEffect } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";
import { UserAuthInfo } from "../../types/auth";
import authenticate from "../../services/authenticate";
import { Redirect, useRouter } from "expo-router";

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isErrorAuth, setIsErrorAuth] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const payload = {
      username,
      password,
    } as UserAuthInfo;

    authenticate(payload).then(() => {
      router.push("/");
    });
  };

  return (
    <View>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Button onPress={(e) => handleLogin(e)}>Log in</Button>

      {isErrorAuth && <Text>Incorrect username or password</Text>}
    </View>
  );
}
