import { Request, Response } from "express";
import { CreateMateriaDTO } from "../../domain/dto/materia/create-materia.dto";
import { MateriaEntity } from "../../domain/entities";
import { MateriaService } from "../../domain/service/materia.service";
import { Controller } from "../base.controller";

export class MateriaController extends Controller
<MateriaEntity, CreateMateriaDTO, CreateMateriaDTO>
{
    constructor(service: MateriaService){
        super(service, CreateMateriaDTO, CreateMateriaDTO);
    }
    

    public getAreas = async (req: Request, res: Response) => {
        try {
            if(this.service instanceof MateriaService){
                console.log("buscando areas");
                const areas = await this.service.findAreas();
                console.log(areas);
                res.json(areas);
            }

        } catch (err: any) {this.handleError(err, res);}
    }
}