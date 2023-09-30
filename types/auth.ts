export interface UserAuthInfo {
  username: string;
  password: string;
}

export interface UserRegisterInfo {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export type AuthContextType = {
  signIn: (data: UserAuthInfo) => void;
  signOut: () => void;
  signUp: (data: UserRegisterInfo) => void;
};
