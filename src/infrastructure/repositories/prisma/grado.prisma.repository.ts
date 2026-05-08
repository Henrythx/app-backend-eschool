import { prisma } from "../../../config/prisma";
import { CreateGradoDTO } from "../../../domain/dto/grado/create-grado.dto";
import { UpdateGradoDTO } from "../../../domain/dto/grado/update-grado.dto";
import { MateriaEntity, GradoEntity, CustomError } from "../../../domain/entities";
import { GradoRepository } from "../../../domain/repositories/grado.repository";


export class GradoPrismaRepository implements GradoRepository {
    private prisma = prisma;



    getMateriasByGradoId(id: number): Promise<MateriaEntity[]> {
        throw new Error("Method not implemented.");
    }


    async findById(id: number): Promise<GradoEntity | null> {
        const grado = await this.prisma.grado.findUnique({
            where: {id},
            include: {materias: { include: {materia: { include: {area: true} }}}}, // Incluir las materias relacionadas, y dentro su área
            //include: { materias: { include: {materia: true} }} // Incluir las materias relacionadas
        })
        console.log("grado prisma repo - findById");
        console.log(grado);
        return grado
            ? GradoEntity.fromObject(grado)
            : null;
    }



    async findAll(): Promise<GradoEntity[]> {
        const grados = await this.prisma.grado.findMany();
        return grados.map(GradoEntity.fromObject);
    }



    async create(dto: CreateGradoDTO): Promise<GradoEntity> {
        try {
            const grado = await this.prisma.grado.create({
                data: {
                    nivel: dto.nivel,
                    year: dto.year,
                    materias: dto.materiasIds 
                        ?   {
                                create : dto.materiasIds.map(id => ({
                                    materia: { connect: {id}}
                                }))
                            }
                        :   undefined
                },
                include: {materias: { include: {materia: { include: {area: true} }}}}, // Incluir las materias relacionadas, y dentro su área
            });

            return GradoEntity.fromObject(grado);  
             
        } catch (err: any) {
            if(err.code === "P2002"){
                throw CustomError.conflict("GradoRepository: Ya existe un grado con ese nivel y año");
            }
            throw CustomError.internalServer("GradoRepository: Error al crear el grado: "+err.message);
        }
    }



    async update(dto: UpdateGradoDTO): Promise<GradoEntity> {
        try {
            const grado = await this.prisma.grado.update({
                where: {id: dto.id},
                data: {
                    nivel: dto.nivel,
                    year: dto.year,
                    materias: dto.materiasIds 
                        ?   {   
                                deleteMany: {}, // Elimina todas las relaciones actuales
                                create: dto.materiasIds.map(id => ({
                                    materia: { connect: {id}}
                                }))
                            }
                        :   undefined
                },
                include: {materias: { include: {materia: { include: {area: true} }}}}, // Incluir las materias relacionadas, y dentro su área

            });

            return GradoEntity.fromObject(grado);
            
        } catch (err: any) {
            if (err.code === "P2025"){
                throw CustomError.notFound("GradoRepository: Grado no encontrado");
            }
            throw CustomError.internalServer("GradoRepository: Error al actualizar el grado: " + err.message);
        }
    }



    deleteById(id: number): Promise<GradoEntity | null> {
        throw new Error("Method not implemented.");
    }
}