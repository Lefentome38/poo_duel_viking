import { Viking } from "./type_perso/vikings";
import { Commbat } from "./combat";
import { Bouclier,bouclierV1,bouclierV2 } from "./équipements/bouclier";
import { Archer } from "./type_perso/archer";

const V1 = new Viking("Ardras",20,10,10,"Yldia",bouclierV1)
const V2 = new Viking("Thor",20,12,10,"Mjöllnir",bouclierV2)

const A1 = new Archer("aldo",15,14,15)

const commbat1 = new Commbat(V1,V2,A1)

    commbat1.lancer_combat();
    console.log();
    commbat1.simulation_combat();
    console.log();
    commbat1.getGagnan();
    console.log();
    V1.info_viking();
    V2.info_viking();
    
