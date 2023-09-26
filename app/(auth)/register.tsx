import React, { useState, useEffect } from "react";
import { TextInput, Button, Text } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { UserRegisterInfo } from "../../types/auth";
import register from "../../utils/register";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

export default function Register(): React.ReactElement {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isPassShown, setIsPassShown] = useState(false);
  const [isRegisterButtonDisabled, setIsRegisterButtonDisabled] =
    useState(true);
  const [isErrorAuth, setIsErrorAuth] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (username && password && firstName && lastName) {
      setIsRegisterButtonDisabled(false);
    } else {
      setIsRegisterButtonDisabled(true);
    }
  });

  const handleRegister = (e: any) => {
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
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.title} variant="titleLarge">
          Register
        </Text>
        <TextInput
          mode="outlined"
          label="First Name"
          value={firstName}
          onChangeText={(text) => setFirstName(text)}
        />
        <TextInput
          mode="outlined"
          label="Last Name"
          value={lastName}
          onChangeText={(text) => setLastName(text)}
        />
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
        disabled={isRegisterButtonDisabled}
        mode="contained"
        onPress={handleRegister}
      >
        Sign up
      </Button>

      {isErrorAuth && <Text>Error with registering</Text>}
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
