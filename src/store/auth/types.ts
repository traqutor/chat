export interface ILoginData {
  userName: string,
  password: string,
}

export interface IAuthUser {
  id: string,
  email: string,
  familyName: string,
  givenName: string,
  userName: string,
  preferredUsername: string,
  avatar: string,
  role: [],
  scope: [],
  systemRole: [],
  roleName: string,
}

export interface IAuthData {
  access_token: string,
  expires_in: string,
  refresh_token: string,
  scope: string,
  token_type: string,
}

export interface IAuthState {
  user?: IAuthUser,
  authData?: IAuthData,
}
