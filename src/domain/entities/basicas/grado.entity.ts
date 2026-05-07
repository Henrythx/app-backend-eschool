import { CustomError } from "./custom.error";
import { MateriaEntity } from "./materia.entitty";

export class GradoEntity {
    constructor(
        public readonly id: number,
        public nivel: "inicial" | "primaria" | "secundaria",
        public year: number,
        public materias: MateriaEntity[] = [], // lista opcional de materias
    ) {}

    static fromObject(obj: {[key: string]: any}): GradoEntity {
        if (!obj.id) 
            throw CustomError.badRequest("Id requerido");
        if (!["inicial","primaria","secundaria"].includes(obj.nivel))
            throw CustomError.unprocessable("Nivel inválido");
        if (!obj.year || isNaN(Number(obj.year)))
            throw CustomError.badRequest("Año inválido");

        const materias = obj.materias
            ? obj.materias.map(MateriaEntity.fromObject)
            : [];

        return new GradoEntity(
            obj.id,
            obj.nivel,
            Number(obj.year),
            materias
        );
    }
}
