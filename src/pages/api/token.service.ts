import Cookies from 'js-cookie';

const TOKEN_KEY = 'access_token';

export const tokenService = {
  saveAccessToken(token: string): void {
    Cookies.set(TOKEN_KEY, token, {
      expires: 1/24,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict'
    });
  },

  getAccessToken(): string | undefined {
    return Cookies.get(TOKEN_KEY);
  },

  deleteAccessToken(): void {
    Cookies.remove(TOKEN_KEY);
  }
};

export default tokenService;