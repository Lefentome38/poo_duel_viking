import { Parramettre_metier } from "../parrametres_metier"
import { bouclierV1 } from "../objets/equipables/armures/bouclier"
import { Equipable } from "../objets/equipables/equipables"
import { Armure } from "../objets/equipables/armures/armure"
export class Viking extends Parramettre_metier {
    private nom_class: string = "Viking"
    constructor(
        name:string = "Viking",
        sante:number = 25,
        force:number = 4,
        critique:number = 8,
        intelligence:number = 0,
        mana:number = 0,
        vitesse:number = 2,
        type_equipement:Armure = bouclierV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }

    info_viking_class(){
        console.log(`class ${this.nom_class}: ${this.name_bonus} ${this.sante_bonus}hp, force ${this.force_bonus}, équipement de type ${this.equipement_bonus.typeEquitable} '${this.equipement_bonus.name}' de résistence ${this.equipement_bonus}, chance critique "+${this.critique_bonus}%"`);
    }
}

export const Viking1 = new Viking("Ardras")
export const Viking2 = new Viking("Thor")
