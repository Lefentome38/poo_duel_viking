import { Viking,V1,V2 } from "./type_perso/vikings";
import { Commbat } from "./combat";
import { Archer,A1 } from "./type_perso/archer";
import { Chevalier,C1 } from "./type_perso/chevalier";


const commbat1 = new Commbat(V1,V2,A1,C1)

    commbat1.lancer_combat();
    console.log();
    commbat1.simulation_combat();
    console.log();
    commbat1.getGagnan();
    console.log();
    V1.info_viking();
    V2.info_viking();
    console.log();
    A1.info_archer()
    C1.info_chavalier()

