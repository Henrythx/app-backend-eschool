export interface Repository <TEntity, TCreateDTO, TUpdateDTO>{

    findById(id: number): Promise<TEntity | null>;

    findAll(): Promise<TEntity[]>;
    
    create(dto: TCreateDTO): Promise<TEntity>;

    update(dto: TUpdateDTO): Promise<TEntity>;

    deleteById(id: number): Promise<TEntity | null>;
}