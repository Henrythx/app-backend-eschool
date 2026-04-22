import { CustomError } from "../../entities/basicas/custom.error";


export class CreateGradoDTO {
    private constructor(
        public readonly nivel: "inicial" | "primaria" | "secundaria",
        public readonly year: number,
    ) {}

    
    static create(obj: { [key: string]: any }): CreateGradoDTO {
        const { nivel, year } = obj;

        if (!nivel || !["inicial","primaria","secundaria"].includes(nivel)) 
            throw CustomError.unprocessable("Nivel inválido");
        
        if (!year || isNaN(Number(year))) 
            throw CustomError.badRequest("Year inválido");
        

        return new CreateGradoDTO(nivel, Number(year));
    }
}
