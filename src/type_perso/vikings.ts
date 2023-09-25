import { Parramettre_metier } from "../parrametres_metier"
import { Bouclier,bouclierV1 } from "../équipements/bouclier"
import { Equipement } from "../équipements/equipements"
export class Viking extends Parramettre_metier {

    constructor( name: string, type_equipement: Equipement){
        let sante : number =  20 
        let force : number = 10 
        let critique : number = 8 
        let intelligence: number = 0
        let mana : number = 0
        let vitesse : number = 0 
        
        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }
}

export const Viking1 = new Viking("Ardras",bouclierV1)