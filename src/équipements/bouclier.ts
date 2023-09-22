export class Bouclier{
   private _b_name: string
   private _defense: number

    constructor(b_name: string, defense:number){
        this._b_name = b_name
        this._defense = defense
    }

    degatspare(degats:number): void{
        if (degats < this._defense) {
            degats = 0
            console.log(`${this._b_name} à paré, dégat ${degats}`);
        }  
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

export const bouclierV0 = new Bouclier("",0)
export const bouclierV1 = new Bouclier("Dome d'Acier",4)
export const bouclierV2 = new Bouclier("Thorgal",3)

