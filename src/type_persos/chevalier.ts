import { Parramettre_metier } from "../parrametres_metier";
import { EpeeV1 } from "../objets/equipables/armes/epee";
import { Equipable } from "../objets/equipables/equipables";
import { Arme } from "../objets/equipables/armes/arme";

export class Chevalier extends Parramettre_metier{
    private nom_class: string = "chevalier"
    constructor(
        name:string = "chevalier",
        sante:number = 40,
        force:number = 5 + EpeeV1.force_arme,
        critique:number = 3,
        intelligence:number = 1,
        mana:number = 5,
        vitesse:number = 1,
        type_equipement:Arme = EpeeV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }
    info_chevalier_class(){
        console.log(`class ${this.nom_class}: ${this.name_bonus} ${this.sante_bonus}hp, force ${this.force_bonus}, équipement de type ${this.equipement_bonus.name} '${this.equipement_bonus.name}' de force ${this.equipement_bonus.typeEquitable}, chance critique "+${this.critique_bonus}%"`);
    }
}


export const Chevalier1 = new Chevalier("archelest")