export interface LoginData {
  userName: string;
  password: string;
}

export interface AuthUser {
  id: string;
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
  user?: AuthUser;
  authData?: AuthData;
}

export const authInitial: AuthState = {
  user: undefined,
  authData: undefined,
};
