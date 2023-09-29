import { Parramettre_metier } from "../parrametres_metier"
import { bouclierV1} from "../équipements/bouclier"
import { Equipement } from "../équipements/equipements"

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
        type_equipement:Equipement = bouclierV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }

    info_viking_class(){
        console.log(`class ${this.nom_class}: ${this.name_bonus} ${this.sante_bonus}hp, force ${this.force_bonus}, équipement de type ${this.equipement_bonus.type} '${this.equipement_bonus.name_equipement}' de résistence ${this.equipement_bonus.defense_equipement}, chance critique "+${this.critique_bonus}%"`);
    }
}

export const Viking1 = new Viking("Ardras")
export const Viking2 = new Viking("Thor")
