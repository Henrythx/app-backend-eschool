import { CustomError } from "../../entities/basicas/custom.error";


export class CreateUsuarioDTO {
    private constructor(
        public readonly dni     : string,
        public readonly nombre  : string,
        public readonly apellido: string,
        public readonly email   : string,
        public readonly passwordHash: string,
        public readonly rol     : "ADMIN" | "DOCENTE" | "ALUMNO",
        public readonly genero  : "M" | "F",
    ){}


    static create(obj: {[key: string]: any }): CreateUsuarioDTO{
        const { dni, nombre, apellido, email, passwordHash, rol, genero } = obj;


        if (!dni || typeof dni !== "string") 
            throw CustomError.badRequest("DNI inválido");

        if (!nombre || typeof nombre !== "string") 
            throw CustomError.badRequest("Nombre inválido");
        
        if (!apellido || typeof apellido !== "string") 
            throw CustomError.badRequest("Apellido inválido");
        
        if (!email || typeof email !== "string") 
            throw CustomError.badRequest("Email inválido");
        
        if (!passwordHash || typeof passwordHash !== "string") 
            throw CustomError.internalServer("PasswordHash inválido");
        
        if (!["ADMIN","DOCENTE","ALUMNO"].includes(rol)) 
            throw CustomError.unprocessable("Rol inválido");
        
        if (!["M","F"].includes(genero)) 
            throw CustomError.unprocessable("Género inválido");


        return new CreateUsuarioDTO(
            dni, 
            nombre, 
            apellido, 
            email, 
            passwordHash, 
            rol, 
            genero
        );
    }
}