import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookieService {
  static tokenKey = 'access-token';
  static tokenAge = 24 * 60 * 60 * 1000;

  setToken(res: Response, token: string) {
    res.cookie(CookieService.tokenKey, token, {
      httpOnly: true,
      maxAge: CookieService.tokenAge,
      sameSite: 'none',
      secure: true,
    });
  }
  removeToken(res: Response) {
    res.clearCookie(CookieService.tokenKey);
  }
}
