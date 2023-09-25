import { Equipement } from "./equipements"

export class Bouclier extends Equipement{

    constructor(name:string, defense:number){
        let critique = 0
        let force = 0
        super(name,'Bouclier', critique,force,defense)
    }

    degatspare(degats:number): number{
        if (degats <= this.defense) {
            degats = 0
            console.log(`${this.name} à paré, dégat ${degats}`);
            return 0
        }
        else{
            return degats
        }  
    }
}



export const bouclierV1 = new Bouclier("dome d'acier",4)
export const bouclierV2 = new Bouclier("turis",3)
