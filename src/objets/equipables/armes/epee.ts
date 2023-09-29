import { Arme } from "./arme"

class Epee extends Arme{
    constructor(name:string, force:number){
        let critique = 0
        let prix = 100
        let poid = 0
        let niveau = 0
        super(name,critique,force,prix,poid,niveau,"Epee")
    }    
}

export const EpeeV1 = new Epee("Epée de lumière",6)
export const EpeeV2 = new Epee("Epée de toto",0)

