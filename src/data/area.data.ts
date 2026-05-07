import { prisma } from "../config/prisma"


async function createAreas(){
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









const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];




async function pruebas() {
}




export { createAreas, pruebas }