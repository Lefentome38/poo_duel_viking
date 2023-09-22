import { Parramettre_metier } from "../parrametres_metier"
import { Viking } from "./vikings"
export class Archer {
    
    private _name: string
    private _sante: number
    private _force: number
    private _critique: number
    // private _vitesse: number
    // private _intelligence: number
    // private _mana: number

    constructor(name: string, sante: number, force: number, critique:number){
        this._name = name
        this._sante = sante
        this._force = force
        this._critique = critique
    }

    info_archer(){
        console.log(`${this._name} ${this._sante}hp`);
    }

    public get name_get():string {
        return this._name;
    }
    public set name(name_set: string) {
        this._name = name_set
    }

    public get sante_get():number {
        return this._sante;
    }
    public set sante(sante_set: number) {
        this._sante = sante_set
    }
}