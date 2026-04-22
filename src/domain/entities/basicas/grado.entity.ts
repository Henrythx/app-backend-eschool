import { CustomError } from "./custom.error";

export class GradoEntity {
    constructor(
        public readonly id: number,
        public nivel: "inicial" | "primaria" | "secundaria",
        public year: number,
    ) {}

    static fromObject(obj: {[key: string]: any}): GradoEntity {
        if (!obj.id) 
            throw CustomError.badRequest("Id requerido");
        if (!["inicial","primaria","secundaria"].includes(obj.nivel))
            throw CustomError.unprocessable("Nivel inválido");
        if (!obj.year || isNaN(Number(obj.year)))
            throw CustomError.badRequest("Año inválido");

        return new GradoEntity(
            obj.id,
            obj.nivel,
            Number(obj.year),
        );
    }
}
