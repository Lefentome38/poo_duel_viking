import { Armure } from "./armure"

export class Bouclier extends Armure{

    constructor(name:string, defence:number){
        let prix = 0
        let poid = 0
        let niveaux = 0
        super(name,defence,prix,poid,niveaux,"Bouclier")
    }

    degatspare(degats:number): number{
        if (degats <= this.defence_armure) {
            degats = 0
            console.log(`${this.typeEquitable} à paré, dégat ${degats}`);
            return 0
        }
        else{
            return degats
        }
    }
}
export const bouclierV0 = new Bouclier("",0)
export const bouclierV1 = new Bouclier("dome d'acier",4)
export const bouclierV2 = new Bouclier("thorgal",3)
