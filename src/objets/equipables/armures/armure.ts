import { Equipable, EquipmentType} from "../equipables";

export abstract class Armure extends Equipable{
    private _defence: number;


    constructor(name:string,defence:number, prix:number, poid:number, niveaux:number,equipementTest:EquipmentType){

        super(name,niveaux,poid,prix,equipementTest)

        this._defence = defence
    }



    public get name_armure(): string {
        return this.name
    }
    public set name_armure(value: string) {
        this.name = value
    }

    public get defence_armure(): number {
        return this._defence;
    }
    public set defence_armure(value: number) {
        this._defence = value;
    }

}