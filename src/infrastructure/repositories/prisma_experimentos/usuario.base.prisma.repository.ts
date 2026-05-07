import { CreateUsuarioDTO } from "../../../domain/dto/usuario/create-usuario.dto";
import { UsuarioEntity } from "../../../domain/entities";
import { UsuarioRepository } from "../../../domain/repositories/usuario.repository";
import { BasePrismaRepository } from "../prisma/base.prisma.repository";

export class UsuarioPrismaRepositoryBase extends BasePrismaRepository
<UsuarioEntity, CreateUsuarioDTO, CreateUsuarioDTO>
implements UsuarioRepository
{
    protected model: any;
    
    protected toEntity(obj: any): UsuarioEntity {
        return UsuarioEntity.fromObject(obj);
    }
}