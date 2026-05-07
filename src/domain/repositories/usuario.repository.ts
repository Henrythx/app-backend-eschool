import { CreateUsuarioDTO } from "../dto/usuario/create-usuario.dto";
import { UpdateUsuarioDTO } from "../dto/usuario/update-usuario.dto";
import { UsuarioEntity } from "../entities/basicas/usuario.entity";
import { Repository } from "./repository";

export interface UsuarioRepository 
extends Repository<UsuarioEntity, CreateUsuarioDTO, UpdateUsuarioDTO>
{} 