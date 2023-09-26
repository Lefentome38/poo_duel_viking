import { Parramettre_metier } from "../parrametres_metier"
import { Bouclier,bouclierV1, bouclierV2 } from "../équipements/bouclier"
import { Equipement } from "../équipements/equipements"

export class Viking extends Parramettre_metier {
    constructor(
        name:string = "viking",
        sante:number = 20,
        force:number = 10,
        critique:number = 8,
        intelligence:number = 0,
        mana:number = 0,
        vitesse:number = 0,
        type_equipement:Equipement = bouclierV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }

    info_viking_class(){
        console.log(`${this.name_bonus} ${this.sante_bonus}hp, équipement de type ${this.equipement_bonus.type} '${this.equipement_bonus.name_equipement}' de résistence ${this.equipement_bonus.defense_equipement}, chance critique "+${this.critique_bonus}%"`);
    }
}

export const Viking1 = new Viking("Ardras")
export const Viking2 = new Viking("Thor")
