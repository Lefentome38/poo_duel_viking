import { Bouclier } from "./bouclier"

export type EquipmentType = "Bouclier" | "Epee" | "armure"

export class Equipement{    
    private _name: string
    private _critique: number
    private _force: number
    private _defense: number
    public type: EquipmentType

    constructor(name:string, equipmentType: EquipmentType, critique:number, force:number, defense:number){
        this._name = name
        this.type = equipmentType
        this._critique = critique
        this._force = force
        this._defense = defense
    }

    public get name_equipement(): string {
        return this._name
    }
    public set name(value: string) {
        this._name = value
    }

    public get critique_equipement(): number {
        return this._critique
    }
    public set critique_equipement(value: number) {
        this._critique = value
   }

    public get force_equipement(): number {
        return this._force
    }
    public set force_equipement(value: number) {
        this._force = value
    }
    
    public get defense_equipement(): number {
        return this._defense
    }
    public set defense(value: number) {
        this._defense = value
    }
}