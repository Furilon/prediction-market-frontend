import React, { useState } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { View } from "react-native";
import { UserRegisterInfo } from "../../types/auth";
import register from "../../services/register";
import { useRouter } from "expo-router"; // Import useRouter instead of useNavigation

export default function Register(): React.ReactElement {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");

  const [isErrorAuth, setIsErrorAuth] = useState<boolean>(false);

  const router = useRouter();

  const handleLogin = (e: any) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      username,
      password,
    } as UserRegisterInfo;

    register(payload).then((token) => {
      if (token === undefined || token === null) {
        setIsErrorAuth(true);
      }

      router.push("/");
    });
  };

  return (
    <View>
      <TextInput
        label="First Name"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        label="Last Name"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
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
      <Button onPress={handleLogin}>Sign up</Button>

      {isErrorAuth && <Text>Error with registering</Text>}
    </View>
  );
}
