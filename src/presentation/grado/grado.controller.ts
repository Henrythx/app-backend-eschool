import { CreateGradoDTO } from "../../domain/dto/grado/create-grado.dto";
import { UpdateGradoDTO } from "../../domain/dto/grado/update-grado.dto";
import { GradoEntity } from "../../domain/entities";
import { GradoService } from "../../domain/service/grado.service";
import { Controller } from "../base.controller";

export class GradoController extends Controller
<GradoEntity, CreateGradoDTO, UpdateGradoDTO>
{
    constructor(service: GradoService){
        super(service, CreateGradoDTO, UpdateGradoDTO);
    }
}