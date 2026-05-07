import { prisma } from "../../../config/prisma";
import { CreateMateriaDTO } from "../../../domain/dto/materia/create-materia.dto";
import { AreaEntity, MateriaEntity } from "../../../domain/entities";
import { MateriaRepository } from "../../../domain/repositories/materia.repository";
import { BasePrismaRepository } from "../prisma/base.prisma.repository";

export class MateriaPrismaRepositoryBase 
extends BasePrismaRepository<MateriaEntity, CreateMateriaDTO, CreateMateriaDTO>
implements MateriaRepository
{
    private prisma = prisma
    protected model = prisma.materia;   
    
    protected toEntity(obj: any): MateriaEntity {
        return MateriaEntity.fromObject(obj);
    }

    async findAreas(): Promise<AreaEntity[]> {
        const areas = await this.prisma.area.findMany();
        return areas.map(AreaEntity.fromObject);
    }

    async findAllByAreaId(id: number): Promise<MateriaEntity[]> {
        const materias = await prisma.materia.findMany({ 
            where: { areaId: id }, 
            include: { area: true } 
        });
        return materias.map(this.toEntity);
    }


}
