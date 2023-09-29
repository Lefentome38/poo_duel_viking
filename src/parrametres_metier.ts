import { Bouclier } from "./objets/equipables/armures/bouclier"
import { Equipable } from "./objets/equipables/equipables"
// class mère
export abstract class Parramettre_metier{

    private _name: string = ""
    private _sante: number = 0
    private _force: number = 0
    private _critique: number = 0
    private _intelligence: number = 0
    private _mana: number = 0
    private _vitesse: number = 0

    private _equipement: Equipable

    constructor(name:string,sante:number,force:number,critique:number,intelligence:number,mana:number,vitesse:number,equipement:Equipable){
        this._name = name
        this._sante = sante
        this._force = force
        this._critique = critique
        this. _intelligence = intelligence
        this. _mana = mana
        this._vitesse = vitesse

        this._equipement = equipement
    }
    
 /* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////

    public get name_bonus():string {
        return this._name;
    }
    public set name_bonus(value: string) {
        this._name = value
    }

    public get sante_bonus():number {
        return this._sante;
    }
    public set sante_bonus(value: number) {
        this._sante = value
    }

    public get force_bonus():number {
        return this._force;
    }
    public set force_bonus(value: number) {
        this._force = value
    }

    public get vitesse_bonus(): number {
        return this._vitesse
    }
    public set vitesse_bonus(value: number) {
        this._vitesse = value
    }

    public get intelligence_bonus(): number {
        return this._intelligence
    }
    public set intelligence_bonus(value: number) {
        this._intelligence = value
    }

    public get mana_bonus(): number {
        return this._mana
    }
    public set mana_bonus(value: number) {
        this._mana = value
    }

    public get critique_bonus(): number {
        return this._critique
    }
    public set critique_bonus(value: number) {
        this._critique = value
    }

    public get bouclier_bonus():Equipable {
        return this._equipement;
    }
    public set bouclier_bonus(value: Bouclier) {
        this.bouclier_bonus = value
    }

    public get arme_bonus():string {
        return this.arme_bonus;
    }
    public set arme_bonus(value: string) {
        this.arme_bonus = value
    }
    
    public get equipement_bonus(): Equipable {
        return this._equipement
    }
    public set equipement_bonus(value: Equipable) {
        this._equipement = value
    }
}