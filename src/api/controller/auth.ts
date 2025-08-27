export default class Auth {
  public async login(): Promise<void> {
    window.location.href = 'http://localhost:8080/api/auth/oauth/wink';
  }
}
