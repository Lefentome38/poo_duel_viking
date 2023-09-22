import { Parramettre_metier } from "../parrametres_metier";
import { Bouclier,bouclierV0 } from "../équipements/bouclier";

export class Chevalier extends Parramettre_metier{
    constructor( name: string, arme: string, bouclier:Bouclier){
        let sante : number =  40 
        let force : number = 5 
        let critique : number = 3 
        let intelligence: number = 1
        let mana : number = 5
        let vitesse : number = 1 

        super(name, sante, force, critique, intelligence, mana, vitesse, bouclier, arme)
    }
}

export const C1 = new Chevalier("Garmart","épée de lumière",bouclierV0)