import { Parramettre_metier } from "../parrametres_metier";
import { Epee,EpeeV1 } from "../équipements/epee";
import { Equipement } from "../équipements/equipements";

export class Chevalier extends Parramettre_metier{
    private nom_class: string = "chevalier"
    constructor(
        name:string = "chevalier",
        sante:number = 40,
        force:number = 10,
        critique:number = 3,
        intelligence:number = 1,
        mana:number = 5,
        vitesse:number = 1,
        type_equipement:Equipement = EpeeV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }
    info_chevalier_class(){
        console.log(`class ${this.nom_class}: ${this.name_bonus} ${this.sante_bonus}hp, équipement de type ${this.equipement_bonus.type} '${this.equipement_bonus.name_equipement}' de force ${this.equipement_bonus.force_equipement}, chance critique "+${this.critique_bonus}%"`);
    }
}


export const Chevalier1 = new Chevalier("archelest")