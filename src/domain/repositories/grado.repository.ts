import { Materia } from "../../../generated/prisma/client";
import { CreateGradoDTO } from "../dto/grado/create-grado.dto";
import { UpdateGradoDTO } from "../dto/grado/update-grado.dto";
import { GradoEntity, MateriaEntity } from "../entities";
import { Repository } from "./repository";

export interface GradoRepository 
extends Repository<GradoEntity, CreateGradoDTO, UpdateGradoDTO>
{
    getMateriasByGradoId(id: number): Promise<MateriaEntity[]>;
}