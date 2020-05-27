class AuthHelper {
  static isAuthenticated() {
    const authData = JSON.parse(localStorage.getItem('authData') || '');
    return authData;
  }
}

export default AuthHelper;
