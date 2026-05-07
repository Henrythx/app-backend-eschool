/*
  Warnings:

  - You are about to drop the column `año` on the `alumnomateriagrado` table. All the data in the column will be lost.
  - You are about to drop the column `areaId` on the `docente` table. All the data in the column will be lost.
  - You are about to drop the column `año` on the `grado` table. All the data in the column will be lost.
  - You are about to drop the column `año` on the `seccion` table. All the data in the column will be lost.
  - Added the required column `year` to the `AlumnoMateriaGrado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Grado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `year` to the `Seccion` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dni` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `docente` DROP FOREIGN KEY `Docente_areaId_fkey`;

-- DropIndex
DROP INDEX `Docente_areaId_fkey` ON `docente`;

-- AlterTable
ALTER TABLE `alumnomateriagrado` DROP COLUMN `año`,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `docente` DROP COLUMN `areaId`;

-- AlterTable
ALTER TABLE `grado` DROP COLUMN `año`,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `seccion` DROP COLUMN `año`,
    ADD COLUMN `year` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `usuario` ADD COLUMN `dni` VARCHAR(191) NOT NULL;
