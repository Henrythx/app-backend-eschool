import { CreateUsuarioDTO } from "../dto/usuario/create-usuario.dto";
import { UpdateUsuarioDTO } from "../dto/usuario/update-usuario.dto";
import { UsuarioEntity } from "../entities/basicas/usuario.entity";
import { UsuarioRepository } from "../repositories/usuario.repository";
import { ServiceBase } from "./base.service";

export class UsuarioService 
extends ServiceBase<UsuarioEntity, CreateUsuarioDTO, UpdateUsuarioDTO, UsuarioRepository>
{
    constructor (repo : UsuarioRepository ) {
        super(repo);
    }


}