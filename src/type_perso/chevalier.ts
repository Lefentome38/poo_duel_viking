import { Parramettre_metier } from "../parrametres_metier";
import { Epee,EpeeV1 } from "../équipements/epee";
import { Equipement } from "../équipements/equipements";

export class Chevalier extends Parramettre_metier{
    constructor( name: string,  type_equipement: Equipement){
        let sante : number =  40 
        let force : number = 5 
        let critique : number = 3 
        let intelligence: number = 1
        let mana : number = 5
        let vitesse : number = 1 

        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
    }
}

export const Chevalier1 = new Chevalier("archelest",EpeeV1)