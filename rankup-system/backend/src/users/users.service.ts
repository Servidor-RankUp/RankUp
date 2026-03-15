import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  async findById(id: number) {
    return this.prisma.usuario.findUnique({
      where: { id },
    });
  }

  async create(nomeUsuario: string, email: string, senha: string) {
    const hash = await bcrypt.hash(senha, 10);

    return this.prisma.usuario.create({
      data: {
        nomeUsuario,
        email,
        senha: hash,
      },
    });
  }
}
