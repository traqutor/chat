import moment from 'moment';

class AuthHelper {
  static isAuthenticated() {
    const authData = JSON.parse(localStorage.getItem('authData') || '');
    const authTime = JSON.parse(localStorage.getItem('authTime') || '');
    const currentTime = moment();
    const validTime = moment(authTime).add(authData.expiresIn, 'seconds');
    if (currentTime.isAfter(validTime) || authTime === '') {
      return '';
    }
    return authData;
  }
}

export default AuthHelper;
