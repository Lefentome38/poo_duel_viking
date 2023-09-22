import { Parramettre_metier } from "../parrametres_metier"
import { Bouclier,bouclierV0 } from "../équipements/bouclier"
export class Archer extends Parramettre_metier{
    
    constructor( name: string, arme: string, bouclier:Bouclier){
        let sante : number =  15 
        let force : number = 2
        let critique : number = 5
        let intelligence: number = 1
        let mana : number = 10
        let vitesse : number = 3

        super(name, sante, force, critique, intelligence, mana, vitesse, bouclier, arme)
    }
}

export const A1 = new Archer("aldo","gogo",bouclierV0)
