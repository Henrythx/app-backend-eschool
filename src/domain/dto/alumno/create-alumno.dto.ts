import { CustomError } from "../../entities/basicas/custom.error";


export class CreateAlumnoDTO {
    private constructor(
        public readonly fechaNacimiento : Date,
        public readonly usuarioId       : number,
        public readonly gradoId         : number,
    ) {}


    static create(obj: { [key: string]: any }): CreateAlumnoDTO {
        const { fechaNacimiento, usuarioId, gradoId } = obj;

        if (!fechaNacimiento) 
            throw CustomError.badRequest("Fecha de nacimiento requerida");
        
        const fecha = new Date(fechaNacimiento);
        if (isNaN(fecha.getTime())) 
            throw CustomError.unprocessable("Fecha de nacimiento inválida");

        if (!usuarioId || isNaN(Number(usuarioId))) 
            throw CustomError.badRequest("UsuarioId inválido");

        if (!gradoId || isNaN(Number(gradoId))) 
            throw CustomError.badRequest("GradoId inválido");


        return new CreateAlumnoDTO(
            fecha, 
            Number(usuarioId), 
            Number(gradoId)
        );
    }
}
