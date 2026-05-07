import { CustomError } from "../entities";
import { Repository } from "../repositories/repository";
import { Service } from "./service";

export abstract class ServiceBase <TEntity, TCreateDTO, TUpdateDTO, 
    TRepo extends Repository<TEntity, TCreateDTO, TUpdateDTO>> 
implements Service <TEntity, TCreateDTO, TUpdateDTO>
{


    constructor (
        protected readonly repo: TRepo
    ){}



    async findById(id: number): Promise<TEntity | null> {
        const resultado = await this.repo.findById(id);
        if(!resultado) throw CustomError.notFound("entidad no encontrada");
        
        return resultado;
    }


    findAll(): Promise<TEntity[]> {
        return this.repo.findAll();
    }



    create(dto: TCreateDTO): Promise<TEntity> {
        return this.repo.create(dto);
    }



    update(dto: TUpdateDTO): Promise<TEntity> {
        return this.repo.update(dto);
    }



    deleteById(id: number): Promise<TEntity | null> {
        return this.repo.deleteById(id);
    }

}