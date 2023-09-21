export class Bouclier{
   private _b_name: string
   private _defense: number

    constructor(b_name: string, defense:number){
        this._b_name = b_name
        this._defense = defense
    }



    public get b_name_get(): string {
        return this._b_name
    }
    public set b_name(b_name_get: string) {
        this._b_name = b_name_get
    }

    public get defense_get(): number {
        return this._defense
    }
    public set defense_get(defense_set: number) {
        this._defense = defense_set
    }
}