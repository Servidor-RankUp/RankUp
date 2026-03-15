/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nomeUsuario" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "discordId" TEXT,
    "ultimoLogin" TIMESTAMP(3),
    "ativo" BOOLEAN NOT NULL DEFAULT true,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PlanoVIP" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT,
    "duracao" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PlanoVIP_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompraVIP" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "planoVIPId" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pendente',
    "idPagamento" TEXT,
    "metodoPagamento" TEXT,
    "dadosPagamento" JSONB,
    "ativadoEm" TIMESTAMP(3),
    "expiraEm" TIMESTAMP(3),
    "criadoEm" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CompraVIP_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_nomeUsuario_key" ON "Usuario"("nomeUsuario");

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- AddForeignKey
ALTER TABLE "CompraVIP" ADD CONSTRAINT "CompraVIP_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CompraVIP" ADD CONSTRAINT "CompraVIP_planoVIPId_fkey" FOREIGN KEY ("planoVIPId") REFERENCES "PlanoVIP"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
