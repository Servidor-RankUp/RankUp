import { Controller, Post, Body, Get } from '@nestjs/common'; // Remove Param se não usar
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(
    @Body('nomeUsuario') nomeUsuario: string,
    @Body('email') email: string,
    @Body('senha') senha: string,
  ) {
    return this.usersService.create(nomeUsuario, email, senha);
  }

  @Get('teste')
  teste() {
    return { message: 'Rota funcionando!' };
  }
}
