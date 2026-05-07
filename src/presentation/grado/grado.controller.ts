import { CreateGradoDTO } from "../../domain/dto/grado/create-grado.dto";
import { GradoEntity } from "../../domain/entities";
import { GradoService } from "../../domain/service/grado.service";
import { Controller } from "../base.controller";

export class GradoController extends Controller
<GradoEntity, CreateGradoDTO, CreateGradoDTO>
{
    constructor(service: GradoService){
        super(service, CreateGradoDTO, CreateGradoDTO);
    }
}