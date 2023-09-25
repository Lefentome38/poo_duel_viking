import { Parramettre_metier } from "../parrametres_metier"
import { bouclierV1,bouclierV2 } from "../équipements/bouclier"
import { Equipement } from "../équipements/equipements"
import { Viking } from "./vikings"
export class Personnage extends Parramettre_metier{
    private _metier: string

    constructor(name: string, metier:string, type_equipement: Equipement){
        let sante : number =  20 //25
        let force : number = 10 //4
        let critique : number = 8 //8
        let intelligence: number = 0
        let mana : number = 0
        let vitesse : number = 0 //2

        super(name, sante, force, critique, intelligence, mana, vitesse, type_equipement)
        this._metier = metier
    }



    public get metier(): string {
        return this._metier
    }
    public set metier(value: string) {
        this._metier = value
    }
    
}

export const combatant1 = new Personnage("Ardras","Viking",bouclierV1)
export const combatant2 = new Personnage("thor","xxx",bouclierV2)