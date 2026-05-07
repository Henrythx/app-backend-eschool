import { CreateMateriaDTO } from "../dto/materia/create-materia.dto";
import { UpdateMateriaDTO } from "../dto/materia/update-materia.dto";
import { AreaEntity, CustomError, MateriaEntity } from "../entities";
import { MateriaRepository } from "../repositories/materia.repository";
import { ServiceBase } from "./base.service";

export class MateriaService 
extends ServiceBase<MateriaEntity, CreateMateriaDTO, UpdateMateriaDTO, MateriaRepository>
{
    constructor (repo : MateriaRepository ) {
        super(repo);
    }

    

    async findAreas(): Promise<AreaEntity[]>{
        return await this.repo.findAreas();
    }


    async findMateriasByAreaId(id: number){
        return await this.repo.findAllByAreaId(id);
    }

    
    async findById(id: number): Promise<MateriaEntity | null> {
        const resultado = await this.repo.findById(id);
        if(!resultado) throw CustomError.notFound("Materia no encontrada");
        
        return resultado;
    }
    

    async findAll(): Promise<MateriaEntity[]> {
        return await this.repo.findAll();
    }


    async create(dto: CreateMateriaDTO): Promise<MateriaEntity> {
        return await this.repo.create(dto);
    }



    async update(dto: UpdateMateriaDTO): Promise<MateriaEntity> {
        return await this.repo.update(dto);
    }



    async deleteById(id: number): Promise<MateriaEntity | null> {
        return await this.repo.deleteById(id);
    }

}