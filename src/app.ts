import { prisma } from "./config/prisma";
import { AppRoutes } from "./presentation/appRoutes";
import { Server } from "./presentation/server";

(async() => {
    main2();
})();




async function main(){
    const server = new Server({
        port: 8080,
        routes: AppRoutes.getRoutes
    });

    server.start();
}




async function main2(){
    await prisma.area.create({
        data: { nombre: "Matemáticas" }
    })

    await prisma.area.create({
        data: { nombre: "Ciencias Sociales" }
    })

    await prisma.area.create({
        data: { nombre: "Ciencias Naturales" }
    })

    await prisma.area.create({
        data: { nombre: "Lengua y Literatura" }
    })

    await prisma.area.create({
        data: { nombre: "Arte" }
    })

    await prisma.area.create({
        data: { nombre: "Educación Física" }
    })

    await prisma.area.create({
        data: { nombre: "Tecnología" }
    })

}