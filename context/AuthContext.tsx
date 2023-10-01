import React from "react";
import { useStorageState } from "../hooks/useStorageState";
import { UserAuthInfo, UserRegisterInfo } from "../types/auth";
import authenticate from "../utils/authenticate";
import register from "../utils/register";

const AuthContext = React.createContext<{
  signIn: ({ username, password }: UserAuthInfo) => void;
  signOut: () => void;
  signUp: ({
    username,
    password,
    firstName,
    lastName,
  }: UserRegisterInfo) => void;
  session?: string | null;
  isLoading: boolean;
} | null>(null);

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: any) {
  const [[isLoading, session], setSession] = useStorageState("token");

  return (
    <AuthContext.Provider
      value={{
        signIn: (payload: UserAuthInfo) => {
          console.log("Performing sign in from context func");
          // Perform sign-in logic here
          authenticate(payload)
            .then((token) => {
              console.log("Got token: " + token);
              setSession(token);
            })
            .catch((err) => console.log(err));
        },
        signOut: () => {
          setSession(null);
        },
        signUp: (payload: UserRegisterInfo) => {
          // Perform sign-up logic here
          register(payload)
            .then((token) => setSession(token))
            .catch((err) => console.log(err));
        },
        session,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
