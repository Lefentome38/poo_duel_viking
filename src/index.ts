import { Viking1, Viking2 } from "./type_persos/vikings";
import { Archer1 } from "./type_persos/archer";
import { Chevalier1 } from "./type_persos/chevalier";
import { Commbat } from "./combat";
import { combatant1_viking1,combatant2_viking2,combatant3_chevalier1,combatant4_archer1 } from "./type_persos/personnage";

const commbat1 = new Commbat(combatant1_viking1, combatant2_viking2, combatant3_chevalier1, combatant4_archer1)
console.log("hello tata");

    // commbat1.lancer_combat();
    // console.log();
    // commbat1.simulation_combat();
    // console.log();
    // commbat1.getGagnan();
    // console.log();
    
    // combatant1_viking1.info_viking(); //les valeurs peuvent changer avec le combat
    // combatant2_viking2.info_viking(); //les valeurs peuvent changer avec le combat
    // combatant3_chevalier1.info_chavalier(); //les valeurs peuvent changer avec le combat
    // combatant4_archer1.info_archer(); //les valeurs peuvent changer avec le combat

    // console.log();
    // Viking1.info_viking_class()
    // Viking2.info_viking_class()
    // console.log();
    // Chevalier1.info_chevalier_class()
    // console.log();
    // Archer1.info_archer_class()
