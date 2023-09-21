import { Bouclier } from "../équipements/bouclier"

export class Viking{
    private _name: string
    private _sante: number 
    private _force: number
    private _bouclier: Bouclier
    private _arme: string
    
    constructor( name: string, sante: number, force: number, arme: string, bouclier:Bouclier){
        this._name = name
        this._sante = sante
        this._force = force 
        this._bouclier = bouclier
        this._arme = arme 
    }

    estVivant(){
        return this._sante > 0
    }

    recupererForce(){
        return Math.floor(Math.random() * this._force + 1) 
    }

    prendDesDegats(degats: number){
        if (degats < this._bouclier.defense) {
            degats = 0
            console.log(`${this._name} à paré, dégat ${degats}`);
        }
        this._sante = this._sante - degats
    }


    attaque(adversaire: Viking){
        adversaire.prendDesDegats(this.recupererForce())
    }

    info_viking(){
        console.log(`${this._name} ${this._sante}hp, arme '${this._arme}' bouclier '${this._bouclier.b_name}' de résistence ${this._bouclier.defense}`);
    }

    public get sante():number {
        return this._sante;
    }

    public get name():string {
        return this._name;
    }
}