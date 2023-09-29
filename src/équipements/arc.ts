import { Equipement } from "./equipements"

export class Arc extends Equipement{

    constructor(name:string, force:number){
        let critique = 0
        let defense = 0
        super(name,'Arc', critique,force,defense)
    }
}
export const arcV1 = new Arc("arc d'artémis",6)