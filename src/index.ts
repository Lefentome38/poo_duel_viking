import { Viking,V1 } from "./type_perso/vikings";
import { Commbat } from "./combat";
import { Archer,A1 } from "./type_perso/archer";
import { Chevalier,C1 } from "./type_perso/chevalier";
import { Equipement } from "./équipements/equipements";
import { Bouclier } from "./équipements/bouclier";
import { Personnage,combatant1, combatant2 } from "./type_perso/personnage";

const commbat1 = new Commbat(combatant1,combatant2)

    commbat1.lancer_combat();
    console.log();
    commbat1.simulation_combat();
    console.log();
    commbat1.getGagnan();
    console.log();
    combatant1.info_viking();
    combatant2.info_viking();
    console.log();
    // A1.info_archer()
    // C1.info_chavalier()