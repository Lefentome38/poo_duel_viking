import { Arme } from "./arme"

class Arc extends Arme{
    constructor(name:string, force:number){
        let critique = 0
        let prix = 0
        let poid = 0
        let niveau = 0
        super(name,critique,force,prix,poid,niveau,"Arc")
    }    
}

export const ArcV0 = new Arc("Epée de toto",0)
export const ArcV1 = new Arc("Epée de lumière",8)
