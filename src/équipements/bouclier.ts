export class Bouclier{
   private _b_name: string
   private _defense: number

    constructor(b_name: string, defense:number){
        this._b_name = b_name
        this._defense = defense
    }

    public get b_name_get():string {
        return this._b_name;
    }
    public get defense_get():number {
        return this._defense;
    }
}