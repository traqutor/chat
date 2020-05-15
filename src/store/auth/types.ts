export interface LoginData {
  userName: string;
  password: string;
}

export interface AuthUser {
  userId: string;
  email: string;
  familyName: string;
  givenName: string;
  userName: string;
  preferredUsername: string;
  avatar: string;
  role: [];
  scope: [];
  systemRole: [];
  roleName: string;
}

export interface AuthData {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  scope: string;
  tokenType: string;
}

export interface AuthState {
  authUser: AuthUser;
  authData: AuthData;
}

export const authInitial: AuthState = {
  authUser: {
    avatar: '',
    email: '',
    familyName: '',
    givenName: '',
    preferredUsername: '',
    role: [],
    roleName: '',
    scope: [],
    systemRole: [],
    userId: '',
    userName: '',
  },
  authData: {
    accessToken: '',
    expiresIn: 0,
    refreshToken: '',
    scope: '',
    tokenType: '',
  },
};
