import { Parramettre_metier } from "../parrametres_metier"
import { bouclierV1,bouclierV2 } from "../équipements/bouclier"
import { EpeeV1 } from "../équipements/epee"
import { Equipement } from "../équipements/equipements"
import { Chevalier, Chevalier1 } from "./chevalier"
import { Viking } from "./vikings"
export class Personnage extends Parramettre_metier{
    private _metier: string

    constructor(name: string, metier:string, type_equipement: Equipement){
        let santes : number = 0
        let force : number = 10
        let critique : number = 8
        let intelligence: number = 0
        let mana : number = 0
        let vitesse : number = 0

        super(name, santes, force, critique, intelligence, mana, vitesse, type_equipement)
        this._metier = metier
    }

    public get sante_get():number {
        return this.sante;
    }
    public set sante(sante_set: number) {
        this.sante = sante_set
    }
}

export const combatant1 = new Personnage("Ardras","Viking",bouclierV1)
export const combatant2 = new Personnage("thor","viking",bouclierV2)
export const combatant3 = new Personnage("archelest","chevalier",EpeeV1)