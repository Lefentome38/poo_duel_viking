import { IObjet } from "../Iobjet"
export type EquipmentType = "Bouclier" | "Epee" | "armure" | "Arc" | "Hache"

export abstract class Equipable implements IObjet{

    prix:number;
    poids:number;
    name:string;
    private _niveau: number
    
    public typeEquitable: EquipmentType;

    constructor(name:string, prix:number, poids:number, niveaux:number,typeEquipement:EquipmentType){
        this.name = name
        this.prix = prix
        this.poids = poids
        this._niveau = niveaux
       
        this.typeEquitable = typeEquipement
    }

    utiliser():string{
        return ""
    }

    public get niveau_equitable(): number {
        return this._niveau
    }
    public set niveau_equitable(value: number) {
        this._niveau = value
    }


}