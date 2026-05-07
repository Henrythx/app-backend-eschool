import { prisma } from "../../../config/prisma";
import { CreateUsuarioDTO } from "../../../domain/dto/usuario/create-usuario.dto";
import { UpdateUsuarioDTO } from "../../../domain/dto/usuario/update-usuario.dto";
import { CustomError } from "../../../domain/entities/basicas/custom.error";
import { UsuarioEntity } from "../../../domain/entities/basicas/usuario.entity";
import { UsuarioRepository } from "../../../domain/repositories/usuario.repository";

export class UsuarioPrismaRepository implements UsuarioRepository{
    private prisma = prisma
    


    async findById(id: number): Promise<UsuarioEntity | null> {
        const usuario = await this.prisma.usuario.findUnique({
            where: {id}
        });
        return usuario
            ? UsuarioEntity.fromObject(usuario)
            : null;
    }
    


    async findAll(): Promise<UsuarioEntity[]> {
        const usuarios = await this.prisma.usuario.findMany();
        return usuarios.map(UsuarioEntity.fromObject);
    }
    


    async create(dto: CreateUsuarioDTO): Promise<UsuarioEntity> {
        try {
            const usuario = await this.prisma.usuario.create({
                data: {                    
                    dni: dto.dni,
                    nombre : dto.nombre,
                    apellido: dto.apellido,
                    email: dto.email,
                    passwordHash: dto.passwordHash,
                    rol: dto.rol,
                    genero: dto.genero
                }
            });

            return UsuarioEntity.fromObject(usuario);

        } catch (error: any)  {
            if (error.code === "P2002") {
                throw CustomError.conflict("Ya existe un producto con ese nombre");
            }
            throw CustomError.internalServer(`Error al crear producto: ${error.message}`);
        }
    }


    async update(dto: UpdateUsuarioDTO): Promise<UsuarioEntity> {
        try {
            const usuario = await this.prisma.usuario.update({
                where: {id: dto.id},
                data: {                    
                    dni: dto.dni,
                    nombre : dto.nombre,
                    apellido: dto.apellido,
                    email: dto.email,
                    passwordHash: dto.passwordHash,
                    rol: dto.rol,
                    genero: dto.genero
                }
            });

            return UsuarioEntity.fromObject(usuario);
        } catch (err:any) {
            if(err.code === "P2002"){
                throw CustomError.conflict("Ya existe un usuario con ese email");
            }
            if(err.code === "P2025"){
                throw CustomError.notFound("Usuario no encontrado");
            }
            throw CustomError.internalServer("Error al actualizar al usuario: "+err.message)
        }
    }



    async deleteById(id: number): Promise<UsuarioEntity | null> {
        try {    
            const deleted = await prisma.usuario.delete({where: {id}});
            return UsuarioEntity.fromObject(deleted);
        } catch (err:any) {
            if(err.code === "P2025"){
                throw CustomError.notFound("Usuario no encontrado");
            }
            throw CustomError.internalServer("Error al eliminar al usuario: "+err.message)
        }
    }

}