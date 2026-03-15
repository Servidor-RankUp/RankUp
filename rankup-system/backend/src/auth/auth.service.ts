import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async login(email: string, password: string) {
    // depois vamos validar no banco
    return {
      token: 'fake-jwt-token',
    };
  }
}
