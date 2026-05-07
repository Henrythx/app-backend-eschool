import { prisma } from "../../../config/prisma";
import { Repository } from "../../../domain/repositories/repository";

export abstract class BasePrismaRepository<TEntity, TCreateDTO, TUpdateDTO> 
implements Repository<TEntity, TCreateDTO, TUpdateDTO>{

    protected prisma = prisma;
    
    protected abstract model : any;

    abstract toEntity(obj: any): TEntity;





    async findById(id: number): Promise<TEntity | null> {
        const record = await this.model.findUnique({ where: { id } });
        return record ? this.toEntity(record) : null;
    }
    
    
    async findAll(): Promise<TEntity[]> {
        const records = await this.model.findMany();
        return records.map((r: any) => this.toEntity(r));
    }


    async create(dto: TCreateDTO): Promise<TEntity> {
        const record = await this.model.create({data: dto})
        return this.toEntity(record);   
        
    }


    async update(dto: TUpdateDTO): Promise<TEntity> {
        throw new Error("Method not implemented.");
    }


    async deleteById(id: number): Promise<TEntity | null> {
        const record = await this.model.delete({ where: { id } });
        return record ? this.toEntity(record) : null;
    }

}