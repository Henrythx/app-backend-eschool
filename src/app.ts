import { pruebas } from "./data";
import { AppRoutes } from "./presentation/appRoutes";
import { Server } from "./presentation/server";

(async() => {
    //pruebas();
    main()
})();




async function main(){
    const server = new Server({
        port: 8080,
        routes: AppRoutes.getRoutes
    });

    server.start();
}
