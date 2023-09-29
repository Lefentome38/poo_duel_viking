import { Equipable, EquipmentType} from "../equipables";

export abstract class Arme extends Equipable{
    private _critique: number
    private _force: number

    constructor(name:string, critique:number, force:number, prix:number, poid:number, niveaux:number,equipementTest:EquipmentType){

        super(name,niveaux,poid,prix,equipementTest)

        this._critique = critique
        this._force = force
    }



    public get name_arme(): string {
        return this.name
    }
    public set name_arme(value: string) {
        this.name = value
    }

    public get critique_arme(): number {
        return this._critique
    }
    public set critique_arme(value: number) {
        this._critique = value
   }

    public get force_arme(): number {
        return this._force
    }
    public set force_arme(value: number) {
        this._force = value
    }
}