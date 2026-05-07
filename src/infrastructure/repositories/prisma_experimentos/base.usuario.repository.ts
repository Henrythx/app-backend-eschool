import { CreateUsuarioDTO } from "../../../domain/dto/usuario/create-usuario.dto";
import { UsuarioEntity } from "../../../domain/entities/basicas/usuario.entity";
import { BasePrismaRepository } from "./base.prisma.repository.1";

export class UsuarioRepositoryBase extends BasePrismaRepository<UsuarioEntity, CreateUsuarioDTO, CreateUsuarioDTO>{
    protected model: any;

    constructor(){
        super();
        this.model = this.prisma.usuario;
    }
    
    toEntity(obj: any): UsuarioEntity {
        return UsuarioEntity.fromObject(obj);
    }

}