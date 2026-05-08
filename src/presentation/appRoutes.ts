import { Router } from "express";
import { UsuarioRouter } from "./usuario/usuario.route";
import { MateriaRouter } from "./materia/materia.route";
import { GradoRouter } from "./grado/grado.route";


export class AppRoutes {
    
    static get getRoutes(): Router{
        const router = Router();

        router.use('/api/usuarios'  , UsuarioRouter.routes);
        router.use('/api/materias'  , MateriaRouter.routes);
        router.use('/api/grados'    , GradoRouter.routes);

        return router;
    }
}