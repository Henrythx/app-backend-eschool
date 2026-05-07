import { CustomError } from "../../entities/basicas/custom.error";


export class UpdateGradoDTO {
    private constructor(
        public readonly id: number,
        public readonly nivel: "inicial" | "primaria" | "secundaria",
        public readonly year: number,
        public readonly materiasIds?: number[]
    ) {}

    
    static create(obj: { [key: string]: any }): UpdateGradoDTO {
        const { nivel, year, materiasIds } = obj;

        if(!obj.id || isNaN(Number(obj.id)))
            throw CustomError.badRequest("UpdateGradoDTO: ID inválido");

        if (!nivel || !["inicial","primaria","secundaria"].includes(nivel)) 
            throw CustomError.unprocessable("UpdateGradoDTO: Nivel inválido");
        
        if (!year || isNaN(Number(year))) 
            throw CustomError.badRequest("UpdateGradoDTO: Year inválido");
        
        if (materiasIds && !Array.isArray(materiasIds)) {
            throw CustomError.badRequest("UpdateGradoDTO: MateriasIds debe ser un array de números");
        }
        
        return new UpdateGradoDTO(Number(obj.id), nivel, Number(year), materiasIds);
    }
}
