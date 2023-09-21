import { Viking } from "./classe_perso/vikings";
import { Commbat } from "./combat";
import { Bouclier } from "./équipements/bouclier";

const bouclierV1 = new Bouclier("Dome d'Acier",4)
const V1 = new Viking("Ardras",20,10,"Yldia",bouclierV1)
const bouclierV2 = new Bouclier("Thorgal",3)
const V2 = new Viking("Thor",20,12,"Mjöllnir",bouclierV2)
const commbat1 = new Commbat(V1,V2)

    commbat1.lancer_combat();
    console.log();
    commbat1.simulation_combat();
    console.log();
    commbat1.getGagnan();
    console.log();
    V1.info_viking();
    V2.info_viking();
