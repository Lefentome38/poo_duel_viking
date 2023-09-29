import { Parramettre_metier } from "../parrametres_metier"
import { arcV1 } from "../équipements/arc";
import { Equipement } from "../équipements/equipements";

export class Archer extends Parramettre_metier {
    private nom_class: string = "Archer"
    constructor(
        name:string = "Archer",
        sante:number = 15,
        force:number = 2 + arcV1.force_equipement,
        critique:number = 5,
        intelligence:number = 1,
        mana:number = 10,
        vitesse:number = 3,
        type_equipement:Equipement = arcV1)
    {
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }

    info_archer_class(){
        console.log(`class ${this.nom_class}: ${this.name_bonus} ${this.sante_bonus}hp, force ${this.force_bonus}, équipement de type ${this.equipement_bonus.type} '${this.equipement_bonus.name_equipement}', chance critique "+${this.critique_bonus}%"`);
    }
}

export const Archer1 = new Archer("aldo")
