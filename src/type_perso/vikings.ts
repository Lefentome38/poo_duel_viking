import { Parramettre_metier } from "../parrametres_metier"
import { Bouclier,bouclierV1,bouclierV2 } from "../équipements/bouclier"

export class Viking extends Parramettre_metier {

    constructor( name: string, arme: string, bouclier:Bouclier){
        let sante : number =  20 //25
        let force : number = 10 //4
        let critique : number = 8 //8
        let intelligence: number = 0
        let mana : number = 0
        let vitesse : number = 0 //2

        super(name, sante, force, critique, intelligence, mana, vitesse, bouclier, arme)
    }
}

export const V1 = new Viking("Ardras","Yldia",bouclierV1)
export const V2 = new Viking("Thor","Mjöllnir",bouclierV2)
