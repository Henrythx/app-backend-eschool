import { CustomError } from "../../entities/basicas/custom.error";


export class CreateDocenteDTO {
    private constructor(
        public readonly usuarioId: number,
        public readonly especialidad?: string,
    ) {}


    static create(obj: { [key: string]: any }): CreateDocenteDTO {
        const { usuarioId, especialidad } = obj;

        if (!usuarioId || isNaN(Number(usuarioId))) 
            throw CustomError.badRequest("UsuarioId inválido");
        
        if (especialidad && typeof especialidad !== "string") 
            throw CustomError.badRequest("Especialidad inválida");


        return new CreateDocenteDTO(Number(usuarioId), especialidad);
    }
}
